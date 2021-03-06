const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
   // required: [true, 'The meal name is required']
  },
  description: {
    type: String,
   // required: [true, 'The meal description is required']
  },

  price: {
    type: Number, 
   // required: [true, 'The price for the meal is required']
  },
  
  // coverImage: {
  //   type: String,
  //   default: "https://www.google.es/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwicksSSgPrdAhXIy4UKHQErBAwQjRx6BAgBEAU&url=http%3A%2F%2Fgrandmother-blog.com%2Fblog%2F2017%2F02%2F10%2Fcomfort-food-whatever-you-want-soup-and-adult-soup-that-we-grandmas-may-cook-with-our-grandchildren-but-must-forbid-them-to-eat%2F&psig=AOvVaw2hWeNT1xWABvB0VWuQDQiY&ust=1539196528441200" 
  // },

  images: {
    type: [String],
    default: ['http://grandmother-blog.com/blog/wp-content/uploads/2017/02/cooking.jpg']
  },
  tags: {
    type: [String],
    default: []
  },
  ingredients: {
    type: [String],
    default: []
  }, 

  portions: {
    type: Number, 
    default: 1
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { 
  timestamps: true,
  toJSON:  {
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});


mealSchema.index({ "location": "2dsphere" });


const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
