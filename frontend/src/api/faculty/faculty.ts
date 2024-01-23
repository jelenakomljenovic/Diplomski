import {CreateProfessionRequest} from "../profession/profession";

export type CreateFacultyRequest = {
    id: number,
    profession: CreateProfessionRequest,
    name: string,
    address: string,
    city: string,
    postalCode: string,
    country: string,
    phoneNumber: string,
    website: string,
    email: string,
    coordinates: string,
    type: boolean
}