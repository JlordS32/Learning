const arr = [
	'Asabeneh',
	250,
	true,
	{ country: 'Finland', city: 'Helsinki' },
	{ skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
]; 

// arr containing different data types

// arr.forEach((array) => {
// 	if (array.skills) {
// 		array.skills.forEach((sk) => {
// 			console.log(sk);
// 		});
// 	}
// });

const skills = arr.map((array) => {
	if (array.skills) {
        return array.skills;
    }
});

console.log(skills);