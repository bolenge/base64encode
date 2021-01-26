/**
 * Base 64 character string encoding module
 * @param {String} text The text to encode
 * @returns {String} text_encoded
 */
module.exports = (text) => {
	return Buffer.from(text).toString('base64');
}