import Contentstack from 'contentstack';

const { API_KEY } = process.env
const { DELIVERY_TOKEN } = process.env
const { ENVIROMENT_NAME } = process.env
const { MANAGEMENT_TOKEN } = process.env

let Stack = Contentstack.Stack({
    api_key: API_KEY,
    delivery_token: DELIVERY_TOKEN,
    environment: ENVIROMENT_NAME,
    region: Contentstack.Region.US,
})

const getContentByURL = async (contentType, slug, locale, referenceUids) => {
    try {
        const Query = Stack
            .ContentType(contentType)
            .Query()
            .includeReference(referenceUids)
            .language(locale)
        const result = await Query
            .where('url', `/${slug}`)
            .toJSON()
            .find()
        return result[0][0]
    }
    catch (err) {
        throw new Error(err)
    }
}

const getEntries = async (contentTypeUid, locale, referenceUids) => {
    try {
        const Query = Stack
            .ContentType(contentTypeUid)
            .Query()
            .includeReference(referenceUids)
            .language(locale)
        const result = await Query
            .includeOwner()
            .toJSON()
            .find()
        return result[0][0]
    }
    catch (error) {
        throw new Error(error)
    }
}

module.exports = { getContentByURL, getEntries }