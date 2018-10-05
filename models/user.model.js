const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const userSchema =  new mongoose.Schema({

  name: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  meals: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Meal',
  },

  reviews: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Review',
  },


  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
    }
  }, 
  
},{ 
  timestamps: true,
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      delete ret.password;
      if (!ret['meals']) {
        ret.posts = [];
      }
      return ret;
    }
  }
});

userSchema.index({ "location": "2dsphere" });


const User = mongoose.model('User', userSchema);
module.exports = User; 