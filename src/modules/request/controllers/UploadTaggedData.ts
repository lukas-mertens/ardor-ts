import { UploadTaggedDataParams, UploadTaggedDataResponse } from "../../../types";
import { IRequestService } from "../../internal-types";


export default class UploadTaggedDataController {
    private readonly service: IRequestService;


    constructor(service: IRequestService) {
        this.service = service;
    }


    public async run(url: string, params: UploadTaggedDataParams): Promise<UploadTaggedDataResponse> {
        return this.service.run("uploadTaggedData", url, params, true) as Promise<UploadTaggedDataResponse>;
    }
}
