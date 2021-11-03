import mongoose, { Document, Schema, Model } from 'mongoose';
import { EmployeeDocument } from './employee.model';

enum TagEnum {
    Innovation = 'Innovation',
    Creativity = 'Creativity',
    AR = 'AR',
    VR = 'VR',
    Cloud = 'Cloud'
  }

type IdeaDocument = Document & {
    // employee: EmployeeDocument["id"];
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    tags: TagEnum[];
    voteCount: number;
}

const IdeaSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            require: true
        },
        voteCount: { type: Number, default: 0 },
        tags: { type: [String], enum: TagEnum },
        // employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true, index: true },
    },
    { 
        timestamps: true, // Automatically creates field createdAt and updatedAt
        collection: 'ideas' // Creates collection by name ideas
    } 
)

const Idea: Model<IdeaDocument> = mongoose.model('Idea', IdeaSchema);

export { Idea, IdeaDocument, TagEnum };