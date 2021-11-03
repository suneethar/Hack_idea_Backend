import mongoose, { Document, Model, Schema } from "mongoose";
mongoose.Promise = global.Promise;

type EmployeeDocument = Document & {
    name: string,
    employeeId: number,
}

const EmployeeSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        employeeId: {
            type: String,
            required: true,
            index: true
        }
    }
);


const Employee: Model<EmployeeDocument> = mongoose.model('Employee', EmployeeSchema);

export { Employee, EmployeeDocument }