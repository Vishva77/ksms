import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment"
mongoose.set('useFindAndModify', false);
const courseFeesSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
      },
    FeesId: {
      type: Number
    },
    courseId: {
        type: String
      },
    year: {
        type: Number
      },
    frequency: {
        type: Number
      },
    totalCharges: {
        type: Number
    },
    Term: {
      type: Array
    },
    startDate: {
      type: Date
    },
    endDate: {
      type: Date
    },
    status: {
        type: Boolean
    },
    courseCategory: {
        type: String
    },
    studentCategory: {
      type: String
    },
    rteFees: {
      type: Number
    },
    vanFees: {
      type: Number
    },
    admissionFees: {
      type: Number
    },
    bookFees: {
      type: Number
    }

})

autoIncrement.initialize(mongoose.connection);
courseFeesSchema.plugin(autoIncrement.plugin, {
  model: "coursefees", 
  field: "FeesId", 
  startAt: 101, 
  incrementBy: 1, 
});

export default mongoose.model("coursefees",courseFeesSchema);