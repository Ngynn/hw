let ten = prompt("Nhập tên của bạn: ");
let age = prompt("Nhập tuổi của bạn: ");
let year = new Date().getFullYear() - age;
let can = ["Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh"];
let chi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];
let canIndex = (year - 4) % 10;
let chiIndex = (year - 4) % 12;
let leapYear = new Date(year, 1, 29).getDate() === 29 ? 'nhuận' : 'không nhuận';
alert(`Chào mừng ${ten}, bạn ${age} tuổi, sinh năm ${year}. Đây là năm ${can[canIndex]} ${chi[chiIndex]} và đây là năm ${leapYear}.`);
