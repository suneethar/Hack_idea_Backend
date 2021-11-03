import { Router } from 'express';
import { getIdeas, addIdea } from '../controllers/ideas.controller';
import { addEmployee, getEmployees } from '../controllers/employees.controller';
import { login } from '../controllers/login.controller';

const router: Router = Router();
router.post('/login', login)

/*=============================================
=            Idea routes            =
=============================================*/
router.get("/ideas", getIdeas);
router.post("/add-idea", addIdea);

/*=============================================
=            Employee routes            =
=============================================*/
router.get("/employees", getEmployees);
router.post("/add-employee", addEmployee);

export default router;