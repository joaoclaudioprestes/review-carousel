const btnLeft = document.querySelector("#angle-left");
const btnRight = document.querySelector("#angle-right");
const img = document.querySelector("#img");
const nameUser = document.querySelector(".title-name");
const job = document.querySelector(".sub-profession");
const reviewText = document.querySelector(".review-text");

let reviews = [
  {
    imgUser:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Jonas Smith",
    profession: "Developer",
    reviewText:
      "Proin consectetur erat vel ligula pulvinar, non consectetur dolor pulvinar. Integer arcu nunc, mattis quis enim quis, phstibulum dignissim non in la nisi orci, pharetra finibus diam vestibulum at. Donec at ornare nunc. Suspendisse molestie gravida lacus, at mattis nulla interdum sit amet. Duis id pulvinar velit. Integer aliquet quam sapien, in dictum purus elementum nec. Nulla facilisis ornare lacus, vitae pulvinar nulla ullamcorper eu.",
  },
  {
    imgUser:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Fister",
    profession: "CEO MyLively",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a est eget tellus auctor fermentum. Duis sollicitudin lectus ut lorem auctor tristique. Ut rhoncus, neque eu ultrices consequat, diam nisi tristique odio, at viverra ipsum magna sed lorem. Morbi justo massa, lacinia sit amet ultrices et, aliqueulla a ipsum aliquam pretium sit amet non ex. Suspendisse dapibus est at sapien interdum, ac blandit urna sollicitudin.",
  },
  {
    imgUser:
      "https://img.freepik.com/fotos-gratis/foto-na-cabeca-de-uma-jovem-bonita-e-feliz-posando-dentro-de-casa-olhando-para-a-camera-e-sorrindo_74855-10218.jpg?size=626&ext=jpg&ga=GA1.1.1115871014.1692560510&semt=ais",
    name: "Sara Wlett",
    profession: "Web Developer",
    reviewText:
      "Vivamus ipsum lorem, pretium non iaculis at, porta id lacus. Morbi id nibh in arcu aliquam posuere. Praesent fermentum id eros id semper. Suspendisse sit amet luctus mauris. Duis imperdiet accumsan purus. Mauris lobortis iaculis egestas. Pror at. Morbi a nibh lorem.",
  },
  {
    imgUser:
      "https://img.freepik.com/fotos-gratis/retrato-de-caucasiano-mulher-sorri_53876-24998.jpg?size=626&ext=jpg&ga=GA1.1.1115871014.1692560510&semt=ais",
    name: "Elena Olevart",
    profession: "CTO Niov",
    reviewText:
      "Aenean vel cursus nisl, nec placerat augue. Etiam lacinia quam in urna luctus fringilla. Sed venenatis, orci a vestibulum cursus, lacus quan velit, eget finibus nisl pulvinar id. Sed et lacinia augue. Aenean id ullamcorper augue. Fusce est felis, vehicula et mauris non, egestas dictum augue.",
  },
  {
    imgUser:
      "https://img.freepik.com/fotos-gratis/retrato-de-selfie-para-videochamada_23-2149186122.jpg?w=740&t=st=1701543123~exp=1701543723~hmac=f3d80f037c00d7cf1934efe29fb51ac02c3f71a316845af3dd8c5b72989c6d77",
    name: "Katy Willins",
    profession: "UI Designer",
    reviewText:
      "Quisque molestie in arcu in viverra. Fusce massa ipsum, vestibulum eu aliquam vitae, lobortis in dui. Curabitur ac risus vel urna varius rhoncus. Donec tortor nunc, consectetur eu nulla non, convallis bibendum tellus. Sed congue magna vitae quam molestie varius. Vivamus nec pulvinar ex. Vestibulum tristique mi in eros elementum, vel placerat dui volutpat. Nulla facilisi. Suspendisse dictu",
  },
];

function currentItemRandom() {
  let currentItem = Math.floor(Math.random() * reviews.length);

  return reviews[currentItem];
}

window.addEventListener("DOMContentLoaded", () => {
  const item = currentItemRandom();
  img.setAttribute("src", item.imgUser);
  nameUser.textContent = item.name;
  job.textContent = item.profession.toUpperCase();
  reviewText.textContent = item.reviewText;
});

btnLeft.addEventListener("click", () => {
  const item = currentItemRandom();
  img.setAttribute("src", item.imgUser);
  nameUser.textContent = item.name;
  job.textContent = item.profession.toUpperCase();
  reviewText.textContent = item.reviewText;
});

btnRight.addEventListener("click", () => {
  const item = currentItemRandom();
  img.setAttribute("src", item.imgUser);
  nameUser.textContent = item.name;
  job.textContent = item.profession.toUpperCase();
  reviewText.textContent = item.reviewText;
});
