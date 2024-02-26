
const map1 = new Map();

export const initializeRegistered = () => {
    const Registered = window.localStorage.getItem("registered")
        ? JSON.parse(window.localStorage.getItem("registered"))
        : [];
    return Registered;
};

export const fetchSubjects = () => {
    const subjects = window.localStorage.getItem("subjects")
        ? JSON.parse(window.localStorage.getItem("subjects"))
        : [];
    return subjects;
};

export const register = (subject) => {
    const registered=initializeRegistered();
    console.log({registered});
    const alreadyRegistered=registered.find((alreadyRegistered) => alreadyRegistered.id === subject.subjectId);
    let copy = [];

    if(alreadyRegistered) {
        alert("Subject Already Registered!");
    }
    else{
        copy=[
            {
                id: subject.subjectId,
                name: subject.subjectName,
                branch: subject.subjectBranch,
                code: subject.subjectCode,
                credits: subject.subjectCredits,
            },
        ];
        map1.set(subject.subjectId, {
            subjectCredits: subject.subjectCredits,
        })
        alert("Subject Registered!");
        console.log({map1});
    }

    copy = [...copy, ...registered];
    window.localStorage.setItem("registered", JSON.stringify(copy));

    const registeredNew = initializeRegistered();

    let totalCredits=0;
    {registeredNew.map((subject) => {
        console.log(subject.id);
        totalCredits+=Number(map1.get(subject.id).subjectCredits);

    })}
    
    window.localStorage.setItem("totalCredits", JSON.stringify(totalCredits));
    window.localStorage.setItem("map1",JSON.stringify(map1));
    return copy;
};