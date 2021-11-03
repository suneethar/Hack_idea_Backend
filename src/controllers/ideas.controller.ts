import { Request, Response } from "express";
import { IdeaDocument, Idea } from "../models/idea.model";

/*=============================================
=  Fetch ideas from Idea collection   =
=============================================*/
const getIdeas = async (req: Request, res: Response) => {
    try {
        const ideas: IdeaDocument[] = await Idea.find();
        res.status(200).json({ data: ideas });

    } catch (error) {
        throw(error);
    }
}

/*=============================================
=  Add idea to the Idea collection    =
=============================================*/
const addIdea = async (req: Request, res: Response) => {
    console.log('inside.....', req.body)
    try {
        const { title, description, voteCount=0, tags} = req.body;

        if (!title || !description) {
            res.status(422).json({message: 'The fields tile and description are required'});
        }

        // Create Document in the Idea collection
        const idea: IdeaDocument = new Idea({
            title,
            description,
            voteCount,
            tags
        })

        const ideaCreated = await idea.save();
        const allIdeas = await Idea.find();

        return res.status(201).json({message: 'Idea added', idea: ideaCreated, data: allIdeas});

    } catch (error) {
        throw error;
    }
}

export { getIdeas, addIdea };