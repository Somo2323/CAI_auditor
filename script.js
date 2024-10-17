
function showErrorDetail(branchId) {
    document.getElementById('branch-list').classList.add('hidden');
    document.getElementById('error-detail').classList.remove('hidden');
  }
  
  function showFeedback() {
    document.getElementById('error-detail').classList.add('hidden');
    document.getElementById('feedback').classList.remove('hidden');
  }
  
  function showBranchList() {
    document.getElementById('error-detail').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('branch-list').classList.remove('hidden');
  }
  
  function clearFeedback(branchId) {
    document.getElementById(branchId).classList.remove('error');
    document.getElementById(branchId).classList.add('normal');
  
    // ซ่อนปุ่ม quick access
    document.getElementById(quick-access-$,{branchId}).style.display = 'none';
  
    sortBranches();
    showBranchList();
  }
  
  function redoFeedback(branchId) {
    document.getElementById(branchId).classList.remove('error');
    document.getElementById(branchId).classList.add('normal');
  
    // ซ่อนปุ่ม quick access
    document.getElementById(quick-access-$,{branchId}).style.display = 'none';
  
    sortBranches();
    showBranchList();
  }
  
  // ฟังก์ชันจัดเรียงการ์ด
  function sortBranches() {
    const branchesContainer = document.getElementById('branches');
    const branchCards = Array.from(branchesContainer.children);
  
    branchCards.sort((a, b) => {
      if (a.classList.contains('error') && !b.classList.contains('error')) {
        return -1;
      }
      if (!a.classList.contains('error') && b.classList.contains('error')) {
        return 1;
      }
      return 0;
    });
  
    // ใส่การ์ดเรียงใหม่กลับไปใน container
    branchCards.forEach(card => branchesContainer.appendChild(card));
  }