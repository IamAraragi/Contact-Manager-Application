import * as ContactService from "../services/contact.service.js";
import { StatusCodes } from "http-status-codes";

export const addContact = async (req, res, next) => {
  try {
    const id = await ContactService.addContact(req.body);
    res.status(StatusCodes.CREATED).json(id);
  } catch (err) {
    next({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Contact Information cannot be added",
    });
  }
};

export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await ContactService.getAllContacts(req.decodedUser.id);
    res.status(StatusCodes.OK).send(contacts);
  } catch (err) {
    next({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Could not get all the contacts",
    });
  }
};

export const deleteContactById = async (req, res, next) => {
  try {
    const contactFound = await ContactService.deleteContactById(req.params.id);
    if (!contactFound) {
      return res.status(StatusCodes.SERVICE_UNAVAILABLE).json({
        message: "Could not find the contact with that id",
      });
    }
    let contacts = await ContactService.getAllContacts(req.decodedUser.id);

    return res.status(StatusCodes.OK).json(contacts);
  } catch (err) {
    next({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Could not delete the contact",
    });
  }
};

export const updateContactById = async (req, res, next) => {
  try {
    const contactFound = await ContactService.updateContactById(
      req.params.id,
      req.body
    );

    if (!contactFound) {
      return res.status(StatusCodes.SERVICE_UNAVAILABLE).json({
        message: "Could not find the contact with that id",
      });
    }

    return res.status(StatusCodes.OK).json({
      message: "Contact Updated",
    });
  } catch (err) {
    next({
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Could not update the contact",
    });
  }
};
