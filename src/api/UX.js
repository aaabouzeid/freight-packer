import Utils from "./utils/cik/Utils";

/**
 * @typedef UXParams
 * @property {Boolean} configure - Execute helpers that allow configuration
 * @property {Number} units - Conversion to unit employed, default=1 for inches, for meters: units=0.0254
 */
const defaultParams = {
    configure: false,
    units: 1
};

class UX{
    /**
     * 
     * @param {UXParams} params 
     */
    constructor(params){

        this.params = Utils.AssignUndefined(params, defaultParams);
    }

}

export default UX;