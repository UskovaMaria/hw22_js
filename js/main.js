const doc = document;
const myForm = doc.forms.myForm;
const tags = myForm.tags;

const value = tags.value;

const myForm1 = doc.forms.myForm1;
const optionData = myForm1.optionData;
const createOption = myForm1.createOption;

const myForm2 = doc.forms.myForm2;

createOption.onclick = function() {
  const value = optionData.value;
  const option = new Option(value, value, false, false);
  tags.append(option);
}

const createElForm = doc.forms.myForm2;
const classInput = createElForm.class;
const contentInput = createElForm.content;
const btn = createElForm.createBtn;

btn.onclick = function(e) {
  e.preventDefault();

  const newEl = doc.querySelector('.new__element');
  const classEl = classInput.value;
  const content = contentInput.value;
  const tag = tags.value;

  createEl(tag, classEl, content, newEl);
  createElForm.reset();
}

function createEl(tag, classEl, content, parent) {
  const el = doc.createElement(tag);
  console.log(el);
  el.className = classEl;
  el.innerText = content;

  parent.append(el);
}


