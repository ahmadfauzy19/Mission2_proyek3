const allMemberList = document.querySelector('#all-member-list');
    const myNameList = document.querySelector('#my-name-list');

    allMemberList.addEventListener('click', event => {
      if (event.target.classList.contains('follow-button')) {
        const listItem = event.target.closest('li');
        const memberName = listItem.textContent.trim();
        
        const newListItem = document.createElement('li');
        newListItem.textContent = memberName;
        
        const unfollowButton = document.createElement('button');
        unfollowButton.textContent = 'Unfollow';
        unfollowButton.classList.add('follow-button', 'unfollow');
        newListItem.appendChild(unfollowButton);
        
        myNameList.appendChild(newListItem);
      }
    });

    myNameList.addEventListener('click', event => {
      if (event.target.classList.contains('follow-button')) {
        const listItem = event.target.closest('li');
        listItem.remove();
      }
    });