import { initializeRegistered, register } from "../courses/helper";
import { RegisteredContext } from "../../hooks/useRegistered";
export const drop = (subject) => {
    // const subject=event.target.parentElement;
    const registered=initializeRegistered();
    let index=0;
    let totalCredits=localStorage.getItem('totalCredits');

    registered.forEach(subjectInArray => {
        if(subjectInArray.id===subject.id){
            totalCredits-=subject.credits;
            localStorage.setItem('totalCredits', JSON.stringify(totalCredits));
            return;
        }
        index++;
    });
    registered.splice(index,1);

    alert('Subject Dropped Successfully!');
    localStorage.setItem('registered', JSON.stringify(registered));
    console.log({registered});
    return registered;
    // saveSubjectListInStorage();
    // document.querySelector('.credit-box__total-credits-value').innerHTML=localStorage.getItem('totalCredits');
    // document.querySelector('.credit-box__remaining-credits-value').innerHTML=Math.max(0,8-totalCredits);
    // event.target.parentElement.remove();
};