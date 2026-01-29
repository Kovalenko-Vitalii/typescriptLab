import { Friend, Colleague } from "./myTypes";
import { friends, colleagues } from "./01-basics";

// 1) older
function older(f: Friend) {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}

function allOlder(fs: Friend[]) {
  return fs.map((f) => older(f));
}

console.log(allOlder(friends))


// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], name: string, department: string, email: string){
    const extension = highestExtension(cs).contact.extension;
    const newColleague: Colleague = {
    name,
    department,
    contact: {
      email,
      extension: extension + 1,
    },
  };

  cs.push(newColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));