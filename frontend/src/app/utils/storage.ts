export const saveFormData = (data: any) => {
localStorage.setItem('signupForm', JSON.stringify(data));
};


export const getFormData = () => {
const data = localStorage.getItem('signupForm');
return data ? JSON.parse(data) : null;
};  