import mongoose from "mongoose";
import { Schema }from "mongoose";

const environmentSchema = new Schema({
    ennvironmentName: {
        type: String,
        required: true,
        trim: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    gitRepo: {
        type: String,
        required: true
    },
    helmValuePath: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        enum: ["auto", "manual"],
        required: true,
        default: "auto"
    },
    branch: {
        type: String,
        required: true
    }
}, {
    timeseries: true
})

const Environment = mongoose.model("Environment", environmentSchema)

export default Environment