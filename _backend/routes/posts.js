const express = require('express');
const multer = require('multer');

const Post = require('../models/post');
const checkAuth = require('../middleware/check-auth');


const router = express.Router();

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error('Invalid MIME type');
    if(isValid) {
      error = null;
    }
    cb(error, "_backend/images");
  },
  filename: (req,file,cb) => {
    const name = file.originalname
    .toLowerCase()
    .split(" ")
    .join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  }
});

router.post(
  "",
  checkAuth,
  multer({storage: storage}).single("image"),
  (req, res, next) => {
    const url = req.protocol + '://' + req.get("host");
    const post = new Post({
      title: req.body.title,
      subtitle: req.body.subtitle,
      content: req.body.content,
      summary: req.body.summary,
      postType: req.body.postType,
      imagePath: url + "/images/" + req.file.filename
  });
  console.log(post);
  console.log(storage);
  post.save().then(createdPost => {
    res.status(201).json({
      message: 'Post added successfully',
      post: {
        ...createdPost,
        id: createdPost._id
        // id: createdPost._id,
        // title: createdPost.title,
        // subtitle: createdPost.subtitle,
        // content: createdPost.content,
        // summary: createdPost.summary,
        // image: createdPost.imagePath
      }
    });
  });
});

router.put(
"/:id",
checkAuth,
 multer({storage: storage}).single("image"),
(req, res, next) => {
  let imagePath = req.body.imagePath;
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.file.filename
  }
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    subtitle: req.body.subtitle,
    content: req.body.content,
    summary: req.body.summary,
    postType: req.body.postType,
    imagePath: imagePath
  });
  console.log(post);
  Post.updateOne({_id: req.params.id}, post).then(result => {
    res.status(200).json({ message: "Update Successful!"});
  });
});

router.get('', (req, res, next) => {
Post.find().then(documents => {
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: documents
  });
  });
});

router.get('/whats-new', (req, res, next) => {
Post.find({postType: 'whatsNew'}).then(documents => {
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: documents
  });
  });
});

router.get('/activities', (req, res, next) => {
Post.find({postType: 'activities'}).then(documents => {
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: documents
  });
  });
});



router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if(post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({message: 'Post not found!'});
    }
  })
});

router.delete('/:id', checkAuth, (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message: 'Post Deleted!'})
  })
});

module.exports = router;
