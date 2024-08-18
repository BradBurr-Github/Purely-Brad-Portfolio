// Function to validate emails
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

// Strings for my Biography entries
export const biographyOne = "I am a seasoned software engineer who has 25+ years of experience in developing C++ and C# applications in Windows environments. I have a deep understanding of SQL Server databases and am proficient in writing complex queries and stored procedures. My passion for coding and problem-solving drives me to build high-performance applications that meet user needs and business objectives."
export const biographyTwo = "I have recently finished a 6-month web programming bootcamp at the University of Utah and posess the skills and knowledge needed to be a Full Stack Developer. With a deep understanding of both client-side and server-side technologies, I excel in creating seamless and dynamic user experiences while ensuring scalable and efficient back-end functionality. I am committed to staying current with industry trends and emerging technologies to continuously improve my skills and deliver innovative solutions. Whether working independently or as part of a team, I approach each project with a focus on quality, efficiency, and user satisfaction.";




