const { cloudinary } = require('../utils')


const uploadImg = async (imgData, id) => {
  console.log('IMAGEEEEEEE DATA:----->>>', id)
  const image = await cloudinary.uploader.upload(imgData, {
    public_id: id,
    folder: 'freeze-point'
  })
  console.log('uploaded Image: ' + image)
  return image
}

const removeImg = async (imageId) => {
  const image = await cloudinary.uploader.destroy(imageId)
  return image
}


module.exports = { 
  uploadImg,
  removeImg
}