// This function handles the fortune checking when the button is clicked
function checkFortune() {
    const birthday = document.getElementById("birthday").value;  // Get the user's birthday
    const question = document.getElementById("question").value;  // Get the selected question (love, work, or money)

    // Validate if a birthdate is entered
    if (!birthday) {
        alert("生年月日を入力してください！");
        return;
    }

    // Calculate the user's age
    const currentDate = new Date();
    const birthDate = new Date(birthday);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() + 1; // months are zero-indexed
    const day = currentDate.getDate();

    // Adjust the age if the birthday hasn't occurred yet this year
    if (month < birthDate.getMonth() + 1 || (month === birthDate.getMonth() + 1 && day < birthDate.getDate())) {
        age--;
    }

    // Call the getFortune function to get the user's fortune
    const fortune = getFortune(age, question);

    // Output the result to the HTML
    const resultElement = document.getElementById("result-output");
    resultElement.innerHTML = `
        <h3>あなたの運勢</h3>
        <p>年齢: ${age}歳</p>
        <p>質問: ${getQuestionLabel(question)}</p>
        <p>運勢: ${fortune}</p>
    `;
}

// This function generates the fortune based on age and selected question
function getFortune(age, question) {
    const fortunes = {
        love: [
            "今日は素敵な出会いがあるかもしれません！",
            "恋愛運が少し低め。焦らずゆっくり進んで。",
            "恋愛運絶好調！大切な人との絆が深まります。",
            "恋愛運最悪！！今日は気になる人とは距離を取りましょう”,
            "恋愛運普通！！何気ない普通の日です”,
        ],
        work: [
            "仕事のチャンスが訪れるかも！積極的に行動を。",
            "今日は慎重に行動した方が良さそうです。",
            "良い成果が得られそう！一歩踏み出してみましょう。",
            "今日は最悪！！何をやっても失敗しそう、、、”,
            ”今日は普通！！平凡な日を過ごせそう！",
        ],
        money: [
            "お金に関する良いニュースがあるかもしれません。",
            "金運は安定。無駄な支出には注意。",
            "金運が不安定。計画的にお金を使うことをおすすめします。",
            "お金が大不安定。今日はギャンブルとかで大負けの予感、、、、",
            "お金が大出費。でもすごく良い出費になるかも！！",
        ],
    };

    // Return a fortune based on the selected category and the user's age
    return fortunes[question][age % fortunes[question].length];
}

// This function returns a label for the selected category
function getQuestionLabel(question) {
    switch (question) {
        case 'love': return "恋愛";
        case 'work': return "仕事";
        case 'money': return "金運";
        default: return "未選択";
    }
}
