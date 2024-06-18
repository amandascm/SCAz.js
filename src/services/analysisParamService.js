class AnalysisParamService {
    static keyValueSeparator = ','
    static itemSeparator = '%'

    static encodeParams (params) {
        const encodedParams = []
        for (const [paramName, paramValue] of Object.entries(params)) {
            encodedParams.push(`${paramName}${AnalysisParamService.keyValueSeparator}${paramValue}`)
        }
        return encodedParams.join(AnalysisParamService.itemSeparator)
    }

    static decodeParams (encodedParams) {
        const extraParamsObject = {}
        encodedParams.split(AnalysisParamService.itemSeparator).forEach(pair => {
            const [key, val] = pair.split(AnalysisParamService.keyValueSeparator)
            extraParamsObject[key] = val
        })
        return extraParamsObject
    }
}

module.exports = {
    AnalysisParamService
}