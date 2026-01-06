/* =====================================
   CONFIG
===================================== */
const WHATSAPP_NUMBER = "2347011245168";
const PRICE = "₦300";

/* =====================================
   VALID VERIFICATION KEYS
===================================== */
const VALID_KEYS = [
  "CX-4927-Q","CX-8103-M","CX-2759-Z","CX-6381-A","CX-9402-K",
  "CX-1876-R","CX-5590-B","CX-7024-Y","CX-3669-P","CX-8241-W",
  "CX-5937-H","CX-1048-X","CX-9472-N","CX-6805-C","CX-2519-T",
  "CX-7386-J","CX-4097-F","CX-8921-D","CX-5604-L","CX-9738-E",

  "CX-6148-V","CX-2957-S","CX-8401-G","CX-1769-U","CX-5328-M",
  "CX-9604-Q","CX-3475-B","CX-7812-Z","CX-4590-A","CX-6087-K",
  "CX-1946-R","CX-8359-Y","CX-2704-P","CX-9168-W","CX-5421-H",
  "CX-7093-X","CX-3865-N","CX-8249-C","CX-1570-T","CX-6914-J",

  "CX-4386-F","CX-9207-D","CX-5649-L","CX-1783-E","CX-7035-V",
  "CX-8492-S","CX-2157-G","CX-9061-U","CX-4328-M","CX-6709-Q",
  "CX-3984-B","CX-7541-Z","CX-2806-A","CX-9153-K","CX-6472-R",
  "CX-5019-Y","CX-8634-P","CX-2948-W","CX-7106-H","CX-4827-X",
  "CX-9360-N","CX-1584-C","CX-6942-T","CX-3075-J","CX-8219-F"
];

/* =====================================
   SUBJECT SELECTION HANDLER
===================================== */
function onSubjectChange() {
  const subject = document.getElementById("subjectSelect").value;
  const priceDisplay = document.getElementById("priceDisplay");
  const verifyBtn = document.getElementById("verifyBtn");

  if (subject) {
    priceDisplay.style.display = "block";
    document.getElementById("subjName").textContent = subject;
    verifyBtn.disabled = false;
  } else {
    priceDisplay.style.display = "none";
    verifyBtn.disabled = true;
  }
}

/* =====================================
   WHATSAPP PAYMENT
===================================== */
function openWhatsApp() {
  const subject = document.getElementById("subjectSelect").value;

  if (!subject) {
    alert("Please select a subject first.");
    return;
  }

  const message =
    `Hi! I want to unlock ${subject} for ${PRICE}. Please send me a verification key.`;

  const encodedMsg = encodeURIComponent(message);

  // Works in browser & Android WebView
  window.location.href =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
}

/* =====================================
   BANK DETAILS MODAL
===================================== */
function showBankDetails() {
  const modal = document.getElementById("bankModal");
  const closeBtn = document.getElementById("closeModal");

  modal.style.display = "flex";

  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
}

/* =====================================
   VERIFY KEY & UNLOCK SUBJECT
===================================== */
function verifyKey() {
  const subject = document.getElementById("subjectSelect").value;
  const keyInput = document.getElementById("keyInput");

  const key = keyInput.value.trim().toUpperCase();

  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");

  errorMsg.style.display = "none";
  successMsg.style.display = "none";

  if (!subject) {
    errorMsg.textContent = "⚠️ Please select a subject first.";
    errorMsg.style.display = "block";
    return;
  }

  if (!key) {
    errorMsg.textContent = "⚠️ Please enter a verification key.";
    errorMsg.style.display = "block";
    return;
  }

  if (!VALID_KEYS.includes(key)) {
    errorMsg.textContent = "❌ Invalid verification key.";
    errorMsg.style.display = "block";
    return;
  }

  const usedKeys =
    JSON.parse(localStorage.getItem("used_keys") || "[]");

  if (usedKeys.includes(key)) {
    errorMsg.textContent = "❌ This key has already been used.";
    errorMsg.style.display = "block";
    return;
  }

  // Save key usage
  usedKeys.push(key);
  localStorage.setItem("used_keys", JSON.stringify(usedKeys));

  // Unlock subject
  localStorage.setItem(`unlocked_${subject}`, "true");

  successMsg.textContent =
    `✅ ${subject} unlocked successfully!`;
  successMsg.style.display = "block";

  keyInput.value = "";

  // Redirect after success
  setTimeout(() => {
    window.location.href =
      "subject_selection.html?mode=practice";
  }, 1500);
}

/* =====================================
   GO BACK
===================================== */
function goBack() {
  window.history.back();
}