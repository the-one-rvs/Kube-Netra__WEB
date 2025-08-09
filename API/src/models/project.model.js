import mongoose, {Schema} from "mongoose";

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    dockerImage: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    poolInterval: {
        type: Number,
        required: true,
        trim: true
    },
    imageType: {
        type: String,
        enum: ["public", "private"],
        required: true,
        default: "public"
    },
    githubUsername: {
        type: String,
        required: true
    },
    githubToken: {
        type: String,
        required: true
    },
    dockerhubPat: {
        type: String,
        validate: {
            validator: function (v) {
                if (this.imageType === "private" && (!v || v.trim() === "")) {
                return false;
                }
                return true;
            },
            message: "DockerHub PAT is required when imageType is private"
        }
    },
    dockerhubUsername: {
        type: String,
        validate: {
            validator: function (v) {
                if (this.imageType === "private" && (!v || v.trim() === "")) {
                return false;
                }
                return true;
            },
            message: "DockerHub username is required when imageType is private"
        }
    },
    patcherName: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timeseries: true
})

const Project = mongoose.model("Project", projectSchema)

export default Project