// const date = new Date();

// const currentYear = document.getElementById('currentYear');
// currentYear.innerHTML = date.getFullYear();

// const lastModified = new Date(document.lastModified);
// const lastModifiedElement = document.getElementById('lastModified');
// lastModifiedElement.innerHTML = `Last Modification: ${new Intl.DateTimeFormat(
// 	"en-US",
// 	{
// 		dateStyle: "full",
//         timeStyle: "short"
// 	}
// ).format(lastModified)}`


// Update the current year
const currentYearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Update the last modified date
const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
