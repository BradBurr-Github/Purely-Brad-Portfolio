// Function to validate emails
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

// Strings for my Biography entries
export const biographyOne = "Senior Software Engineer with over 25 years of experience specializing in the development of Windows applications using C++ and C#. Possesses extensive expertise in SQL Server databases, including advanced skills in crafting complex queries and stored procedures. Recently completed a comprehensive 6-month web programming bootcamp at the University of Utah, acquiring Full Stack Developer capabilities. Demonstrates a profound understanding of both client-side and server-side technologies, adept at creating dynamic and seamless user experiences while ensuring robust and scalable back-end solutions. Committed to staying abreast of industry advancements and emerging technologies, continuously enhancing skills to deliver innovative and effective solutions. Proven ability to work independently or collaboratively with a focus on quality, efficiency, and user satisfaction."
export const biographyTwo = "";




