import { Request, Response } from 'express';
import { Employee } from '../models/employee.model';

const login = async (req: Request, res: Response) => {
    try {
        const {employeeId} = req.body;
        const employee = await Employee.findOne({employeeId: employeeId});

        if (!employee) {
            return res.status(409).json({status: 'Failed', message: 'EmployeeID doent exist'});
        }

        const { name } = employee;
        return res.status(200).json({status: 'Success', data: {name, employeeId}});

    } catch (error) {
        throw error;
    }
}

export { login }