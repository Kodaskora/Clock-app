let faceColor = '#f4f4f4';
let borderColor = '#800000';
let numberLinesColor = '#000000';
let largeHandsColor = '#800000';
let secondHandColor = '#FF7F50';
const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    faceColor = event.target[0].value;
    borderColor = event.target[1].value;
    numberLinesColor = event.target[2].value;
    largeHandsColor = event.target[3].value;
    secondHandColor = event.target[4].value;
  });
}

function clock() {
  const now = new Date();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.save();

  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250);
  ctx.rotate(-Math.PI / 2);

  ctx.strokeStyle = numberLinesColor;
  ctx.fillStyle = faceColor;
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = borderColor;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  ctx.save();
  for (let i = 0; i < 12; i++){
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  ctx.lineWidth = 4;
  for (let i = 0; i < 60; i++){
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  ctx.save();
  ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
  ctx.strokeStyle = largeHandsColor;
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.strokeStyle = largeHandsColor;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.rotate((Math.PI / 30) * sec);
  ctx.strokeStyle = secondHandColor;
  ctx.fillStyle = secondHandColor;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.restore();

  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);
