import { Request, Response } from "express";
import { EmployeeDocument, Employee } from "../models/employee.model";

/*=============================================
=   get employees from Employee collection  =
=============================================*/
const getEmployees = async (req: Request, res: Response) => {
    try {
        const employees: EmployeeDocument[] = await Employee.find();
        return res.status(200).json({ data: employees });

    } catch (error) {
        throw error;
    }
}

/*=============================================
=   add employee to Employee collection  =
=============================================*/
const addEmployee = async (req: Request, res: Response) => {
    try {
        const { name, employeeId } = req.body;
        const emplyeeExist = await Employee.findOne({employeeId: employeeId});

        if (emplyeeExist) {
            return res.status(422).json({message: 'Employee already exist'});
        } 
        const employee = new Employee({
            name,
            employeeId
        });

        const employeeCreated = await employee.save();
        const allEmployees = await Employee.find();

        return res.status(201).json({message: 'Idea added', employee: employeeCreated, data: allEmployees});

    } catch (error) {
        throw error;
    }
}

export { getEmployees, addEmployee };