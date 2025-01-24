const RegexUtil = {
	// **Email Patterns**
	emails: {
		email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Validates email addresses
	},

	// **URL Patterns**
	urls: {
		url: /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/[^\s]*)?$/, // Validates URLs
		youtubeUrl:
			/^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]{11}$/, // Matches YouTube video URLs
	},

	// **Phone Number Patterns**
	phoneNumbers: {
		phoneNumber: /^\+?[1-9]\d{1,14}$/, // Validates phone numbers (E.164 format)
		phoneInternational: /^\+?[1-9]\d{1,14}$/, // Matches international phone numbers (E.164 format)
	},

	// **Postal Code Patterns**
	postalCodes: {
		postalCode: /^\d{4,10}$/, // Validates postal codes (4-10 digits)
		zipCode: /^\d{5}(-\d{4})?$/, // Validates ZIP codes (US format)
	},

	// **Date and Time Patterns**
	dates: {
		dateYYYYMMDD: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, // Date format YYYY-MM-DD
		dateTime: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/, // Matches ISO 8601 DateTime format (e.g., 2025-01-01T12:00:00Z)
		timeHHMMSS: /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/, // Time format HH:MM:SS
		timeHHMM: /^(?:[01]?[0-9]|2[0-3]):([0-5][0-9])$/, // Matches time in 24-hour format HH:MM
		timeDuration: /^([0-9]{2}):([0-5][0-9]):([0-5][0-9])$/, // Matches time duration in HH:MM:SS format
	},

	// **Alphanumeric and Text Patterns**
	text: {
		alphanumeric: /^[a-zA-Z0-9]+$/, // Matches alphanumeric strings
		alphanumericWithSpaces: /^[a-zA-Z0-9\s]+$/, // Matches alphanumeric characters including spaces
		onlyAlphabets: /^[a-zA-Z]+$/, // Matches only alphabetic strings
		nonAlphanumeric: /[^a-zA-Z0-9]/, // Matches non-alphanumeric characters
		whitespaceOnly: /^\s*$/, // Matches strings containing only whitespace
		whitespaceTrimmer: /^\s+|\s+$/g, // Matches leading and trailing whitespace
		numbersOnly: /^\d+$/, // Matches numeric strings
		escapedCharacters: /\\[\\'"\nrtbfa]/, // Matches escaped characters
		strongPassword:
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/, // Strong password validation
		username: /^[a-zA-Z0-9_]{3,16}$/, // Matches valid usernames (3 to 16 chars, letters, numbers, underscores)
		slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/, // Matches SEO-friendly slugs
		palindrome: /^(\w)(\w?)(\w)\2\1$/, // Matches palindromes (basic example)
		hashtag: /^#(\w+)$/, // Matches hashtags (e.g., #regex)
		twitterHandle: /^@?([a-zA-Z0-9_]){1,15}$/, // Matches Twitter handles
		gitHubUsername: /^[a-zA-Z0-9]([a-zA-Z0-9-]{1,38}[a-zA-Z0-9])?$/, // Matches valid GitHub usernames
		alphaNumericWithSpecialChars:
			/^[a-zA-Z0-9!@#$%^&*()_+=\[\]{};:'",<>\./?\\|]*$/, // Matches alphanumeric strings with special characters
	},

	// **HTML/XML Tags**
	html: {
		htmlTags: /<("[^"]*"|'[^']*'|[^'">])*>/, // Matches HTML tags
		htmlEntity: /&[a-zA-Z]+;/, // Matches HTML entities (e.g., &amp;)
		htmlComment: /<!--[\s\S]*?-->/, // Matches HTML comments
		xmlTag: /<\/?[\w\s="/']*[^<>]*>/, // Matches XML tags
		htmlCommentTag: /<!--[\s\S]*?-->/, // Matches HTML comment tags
	},

	// **File and Media Patterns**
	files: {
		fileExtension:
			/\.(jpg|jpeg|png|gif|bmp|svg|pdf|doc|docx|xls|xlsx|txt)$/i, // Matches file extensions
		base64: /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/, // Matches Base64 strings
		currencyFormat: /^\$?(\d{1,3})(,\d{3})*(\.\d{2})?$/, // Currency format (e.g., $1,234.56)
		floatingPointNumber: /^-?\d+(\.\d+)?$/, // Matches floating-point numbers
		negativeDecimal: /^-\d+\.\d+$/, // Matches negative decimal numbers
		positiveInteger: /^[1-9]\d*$/, // Matches positive integers
		negativeInteger: /^-[1-9]\d*$/, // Matches negative integers
		signedNumber: /^([+-]?\d+)$/, // Matches signed numbers
		scientificNotation: /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/, // Matches scientific notation
		romanNumerals:
			/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/, // Matches Roman numerals
		unicodeCharacter: /\\u[0-9a-fA-F]{4}/, // Matches Unicode characters in form \uXXXX
	},

	// **IP Address Patterns**
	ips: {
		ipv4: /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/, // Validates IPv4 addresses
		ipv6: /([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4})/, // Validates IPv6 addresses
		ipv4Shortened: /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/, // Matches shorthand IPv4 address without leading zeros
		matchIP:
			/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$|([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/, // Matches both IPv4 and IPv6
	},

	// **Credit Card Patterns**
	creditCards: {
		creditCard:
			/^4[0-9]{12}(?:[0-9]{3})?$|^5[1-5][0-9]{14}$|^3[47][0-9]{13}$|^6(?:011|5[0-9]{2})[0-9]{12}$/, // Matches Visa, MasterCard, AmEx, Discover cards
		creditCardType:
			/^(4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/, // Matches Visa, MasterCard, AmEx, Discover
	},

	// **Other Validation**
	others: {
		uuid: /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-4[a-fA-F0-9]{3}-[89aAbB][a-fA-F0-9]{3}-[a-fA-F0-9]{12}$/, // Validates UUID
		json: /^[\],:{}\s]*$/, // Basic JSON string match
		base64Url:
			/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/, // Matches Base64 URL encoding
		xmlComment: /<!--[\s\S]*?-->/, // Matches XML comments
		htmlCommentTag: /<!--[\s\S]*?-->/, // Matches HTML comment tags
	},
};

module.exports = RegexUtil;
