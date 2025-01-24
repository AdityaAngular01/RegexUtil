```markdown
# RegexUtil - A Utility Library for Regular Expressions

**RegexUtil** is a comprehensive utility library containing commonly used regular expressions for validating, matching, and parsing various types of data like emails, URLs, phone numbers, IP addresses, dates, and more. This package helps you save time when working with regex patterns, providing easy-to-use and organized regex for various validation scenarios.

## Installation

You can install **RegexUtil** using npm:

```bash
npm install @node/regex-utility
```

## Usage

After installing, you can import the package and access the regex patterns grouped by categories.

```javascript
const RegexUtil = require('@node/regex-utility');

// Example usage: Validate an email address
const isValidEmail = RegexUtil.emails.email.test("example@example.com");
console.log(isValidEmail); // true

// Example usage: Validate an IPv4 address
const isValidIPv4 = RegexUtil.ips.ipv4.test("192.168.1.1");
console.log(isValidIPv4); // true

// Example usage: Validate a YouTube URL
const isValidYouTubeUrl = RegexUtil.urls.youtubeUrl.test("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
console.log(isValidYouTubeUrl); // true
```

## Available Patterns

### **Email Patterns**

- `RegexUtil.emails.email`: Validates a standard email address.

### **URL Patterns**

- `RegexUtil.urls.url`: Validates a general URL.
- `RegexUtil.urls.youtubeUrl`: Matches YouTube video URLs.

### **Phone Number Patterns**

- `RegexUtil.phoneNumbers.phoneNumber`: Matches phone numbers (E.164 format).
- `RegexUtil.phoneNumbers.phoneInternational`: Matches international phone numbers.

### **Postal Code Patterns**

- `RegexUtil.postalCodes.postalCode`: Validates postal codes (4-10 digits).
- `RegexUtil.postalCodes.zipCode`: Validates US ZIP codes (5 digits or 5+4 format).

### **Date and Time Patterns**

- `RegexUtil.dates.dateYYYYMMDD`: Validates date in `YYYY-MM-DD` format.
- `RegexUtil.dates.dateTime`: Matches ISO 8601 DateTime format.
- `RegexUtil.dates.timeHHMMSS`: Matches time in `HH:MM:SS` format.
- `RegexUtil.dates.timeHHMM`: Matches time in `HH:MM` format.
- `RegexUtil.dates.timeDuration`: Matches time duration in `HH:MM:SS` format.

### **Alphanumeric and Text Patterns**

- `RegexUtil.text.alphanumeric`: Matches alphanumeric strings.
- `RegexUtil.text.strongPassword`: Matches strong passwords with uppercase, lowercase, number, and special character.
- `RegexUtil.text.username`: Matches valid usernames (3 to 16 characters, letters, numbers, and underscores).
- `RegexUtil.text.slug`: Matches SEO-friendly slugs.

### **HTML/XML Tags**

- `RegexUtil.html.htmlTags`: Matches HTML tags.
- `RegexUtil.html.xmlTag`: Matches XML tags.
- `RegexUtil.html.htmlComment`: Matches HTML comments.

### **File and Media Patterns**

- `RegexUtil.files.fileExtension`: Matches common file extensions (e.g., .jpg, .png, .pdf).
- `RegexUtil.files.base64`: Matches Base64 encoded strings.
- `RegexUtil.files.currencyFormat`: Matches currency format (e.g., $1,234.56).

### **IP Address Patterns**

- `RegexUtil.ips.ipv4`: Validates IPv4 addresses.
- `RegexUtil.ips.ipv6`: Validates IPv6 addresses.
- `RegexUtil.ips.matchIP`: Matches both IPv4 and IPv6 addresses.

### **Credit Card Patterns**

- `RegexUtil.creditCards.creditCard`: Matches credit card numbers (Visa, MasterCard, AmEx, Discover).
- `RegexUtil.creditCards.creditCardType`: Matches credit card types.

### **Other Validation Patterns**

- `RegexUtil.others.uuid`: Matches UUID.
- `RegexUtil.others.json`: Matches JSON strings.
- `RegexUtil.others.base64Url`: Matches Base64 URL encoding.
- `RegexUtil.others.xmlComment`: Matches XML comments.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Contributions

Feel free to fork, improve, and contribute to the RegexUtil package. Open an issue or pull request if you encounter any bugs or have feature requests!

---

Enjoy using RegexUtil in your projects! 😊

```

### Summary of Contents:
- **Installation Instructions**: Easy installation through npm.
- **Usage Instructions**: Example code to demonstrate how to use the package for various regex validations.
- **List of Available Patterns**: Detailed list of all regex patterns available, grouped by category (e.g., emails, URLs, IPs, etc.).
- **Contributions and License**: Instructions on contributing to the package and the MIT License for open-source usage.
