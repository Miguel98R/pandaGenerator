const express = require('express');
const multer = require('multer');
const qrcode = require('qrcode');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/generate', upload.single('file'), (req, res) => {
    const { file, url } = req.body;

    if (file) {
        const data = fs.readFileSync(file.path);
        const imgData = qrcode.toDataURL(data);
        fs.writeFileSync(`public/images/${file.originalname}.png`, imgData);
        res.render('qr', { image: `${file.originalname}.png` });
    } else if (url) {
        qrcode.toFile(`public/images/${url}.png`, url, () => {
            res.render('qr', { image: `${url}.png` });
        });
    }
});

app.listen(3030, () => {
    console.log('Server started on port 3030');
});
