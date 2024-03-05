/*შევქმენით მასივი naruto */
const naruto = ["naruto", "sasuke", "sakura", "itachi", "kakashi"];
/* შევქმენით ფუნქცია, რომელიც რანდომულად არჩვევს მასივიდან სიტყვას მისი ინდეხსის მიხედვით და აბრუნებს მის ინდექს */
function randomWord() {
  const randomIndex = Math.floor(Math.random() * naruto.length);
  return naruto[randomIndex];
}

function game() {
  /*იძახება ფუნქცია, რომელიც აბრუნებს გამდომულ სიტყვას მასივიდან და ინახება ჩვენს მიერ შექმნილ ცვლადში secretWord, ვქმნით მასივს Array.from-ით, ყველა მასივის იელემენტს ვყოფთ "_",შევქმნათ ცვლადი let incorrectattempt რომელიც მომავალშ დაითვლის შეცდომებს, თავდაპირველად = 0; */
  const secretWord = randomWord();
  let guessedWord = Array.from({ length: secretWord.length }, () => "_");
  let incorrectattempt = 0;
/**შევქმნათ ციკლი while, რომელიც გრძელდება სანამ მომხმარებელი არ გამოიცნობს სიტყვას, რომრლიც დააგენერირა პროგრამამ. join("") მასივის მეთოდია რომელიც ართიანებს მასივის ყველა ელემენტს string-ში */
  while (guessedWord.join("") !== secretWord) {
    const user = prompt(
      `სიტყვა: ${guessedWord.join(" ")}
    არასწორი მცდელოა: ${incorrectattempt}
    შეიყვანეთ ასო`
    );
    /*ამოწმებს შეყვანილი ასო, ხომ არ არის ან ცარილელი სიმბოლო, არის თუ არა შეყვანილი მხოლოდ 1 ასო, არის თუ არა, ინგლისური ასო შეყვანილი */
    if (!user || user.length !== 1 || !/[a-zA-Z]/.test(user)) {
      alert("შეიყვანეტ სწორი სიმბოლო");
      continue;
    }
    /*ამოწმებს არის თუ არა შეყვანილი ასო secretWord, თუ არის აგრძელებთ შეყვანას*/
    if (secretWord.includes(user)) {
      alert("სწორია! გააგრძელეთ");
      /**ციკლი for ამოწმებს ყველა ასოს  */
      for (let i = 0; i < secretWord.length; i++) {
        /*ამოწმებს ემთხვევა თუ არა მომხმარებლის მიერ შეყვანილი ასო რანდომული სიტყვის ასოს, თუ ხო ანაცვლებს _ ასოთ */
        if (secretWord[i] === user) {
          guessedWord[i] = user;
        }
      }
    } else {
      /* თუ არასწორია შეცდომების მცდელობა იზრდება */
      alert("არასწორია, სცადეთ კიდევ ერთხელ");
      incorrectattempt++;
    }
  } /*როდესაც მომხმარებელი გამოიცნობს სიტყვას გამოდის შესაბამისი alert */
  alert(`გილოცავთ! თქვენ გამოიცანით სიტყვა: ${secretWord}`);
}

game();
/*შევქმნთ ცვლადები, რომლებიც რიცხვების დიაპაზონს განსაზღვრავენ */
const minNumber = 1;
const maxNumber = 5;
/* დავაგენერიროთ შემთხვევითი რიცხვი მოცემულ დიაპაზონში*/
const answer =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

/* შევქმნათ ცვლადები ციკლის გასაკონტროლებლად და მცდებობის რაოდენობის გასაკონპროლებლად*/
let attempts = 0;
let nextStep = true;

/*დავიწყოთ ციკლი while, სანამ nextStep false არ გახდება*/

while (nextStep) {
  /* ვთხოვოთ მომხმარებელს შეიყვანოს ციფრი მოცემულ დიაპაზონში*/

  let user = prompt(`შეიყვანეთ კორექტული მონაცემი ${minNumber} - ${maxNumber}`);
  /* მომხმარებლის მიერ შეყვანილი მნიშვნელობა რიცხვათ გადავაქციოთ + = Number(), რადგან prompt String აბრუნებს*/
  user = +user;
  /*შეამოწმეთ, არის თუ არა მომხმარებლის მიერ შეყვანილი მნიშვნელობა რიცხვი და არის თუ არა მოცემულ დიაპაზონში*/
  if (isNaN(user) || user < minNumber || user > maxNumber) {
    alert("შეიყვანეთ რიცხვი");
  } else {
    /* თუ ციფრია, მაგრამ დაგენერირებულისგან განსხვავებული, დავათვლევინოთ მცდებოლის რაოდენობა*/
    attempts++;
    /* უკუკავშირი იმის მიხედვით რას შეიყვანს მომხმარებელი*/
    if (user < answer) {
      alert("დაბალია 😔 სცადეთ უფრო მაღალი");
    } else if (user > answer) {
      alert("მაღალია😔 ცდადეთ დაბალი");
    } else {
      /*თუ მომხმარებლის მიერ შეყვანილი ციფრი ემთხვევა შემთხვევით რიცხვს, დაასრულეთ ციკლი და აჩვენეთ წარმატების შეტყობინება */
      alert(`გილოცათ ${answer}, 😀 ${attempts} მცდელობაში`);
      nextStep = false;
    }
  }
}
/*შევქმნათ const calc რომელიც არის  DOM ელემენტის ნაწილი კლასით  "calculator",*/
const calc = document.querySelector(".calculator");
/*შევქმნათ const result რომელიც არის  DOM ელემენტის ნაწილი  id "result",*/
const result = document.querySelector("#result");
/*ვაყენებთ addEventListener class = "calculator", როდესაც ამ ელემენტის შიგნით ხდება დაწკაპუნება, ფუნქცია შესრულებულია. */
calc.addEventListener("click", function (event) {
  /*ვამოწმებთ არის თუ არა სამიზნე ელემენტი (რაზეც დააწკაპუნეთ)  ღილაკი, თუ არა, ფუნქცია წყდება */
  if (!event.target.classList.contains("btn")) return;
  /* იმ ღილაკის ტექსტური შინაარსის მიღება, რომლილზეც დავაწკაპუნეთ*/
  const value = event.target.innerText;
  switch (value) {
    case "C":
      /*თუ ღილაკი "C" დავაწკაპუნეთ, შლის რეზულტატს  */
      result.innerText = "";
      break;
    case "←":
      /*თუ ღილაკი "←"დავაწკაპუნეთ, შლის ბოლო სიმბოლოს  */
      result.innerText = result.innerText.slice(0, -1);
      break;
    /* თუ დავაწკაპუნებთ "=" გამოავს გაანგარიშების შედეგი */
    case "=":
      /*ამოწმებს არის თუ არა ელემენტ  id "result" შიგნით გარდა ქვემოთ ჩამოთვლილი სომბოლოებისა*/
      if (result.innerText.search(/[^0-9*/+-.()]/im) != -1) return;
      /*თუ არაა მათემატიკური ლოგიკური ამოცანა მითითებული აგდებს "EROOR!",თუ არა და გამოანგარიშებს მატემატიკურ ამოცანას */
      try {
        result.innerText = eval(result.innerText).toFixed(2);
      } catch {
        result.innerText = "EROOR!";
      }
      break;
    default:
      /*თუ რომელიმე სხვა ღილაკს დააწკაპუნებთ, მისი ტექსტი ემატება მიმდინარე შედეგის */
      result.innerText += value;
  }
});
