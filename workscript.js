let foldername;
const newTextField = document.createElement("input");
const addBtn = document.createElement("button");
const deleteBtn = document.createElement("button");

document.addEventListener('DOMContentLoaded', function() {
    const titleDisplay = document.getElementById('workspaceTitle');
    const titleInput = document.getElementById('titleInput');
    const renameBtn = document.querySelector('.rename-btn');
    
    function startEditing() {
        titleDisplay.style.display = 'none';
        renameBtn.style.display = 'none';
        titleInput.style.display = 'block';
        titleInput.value = titleDisplay.textContent;
        titleInput.focus();
    }

    function stopEditing() {
        const newTitle = titleInput.value.trim() || 'Untitled Workbench';
        titleDisplay.textContent = newTitle;
        document.title = newTitle;
        titleDisplay.style.display = 'block';
        renameBtn.style.display = 'block';
        titleInput.style.display = 'none';
    }

    renameBtn.addEventListener('click', startEditing);

    titleInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            stopEditing();
        } else if (e.key === 'Escape') {
            titleInput.value = titleDisplay.textContent;
            stopEditing();
        }
    });

    titleInput.addEventListener('blur', stopEditing);
});

function addFoldername()
{
    if(!document.getElementById("addFoldername")){
    newTextField.type="text";
    newTextField.placeholder="Folder name";
    newTextField.id="addFoldername";

    addBtn.type="button";
    addBtn.id="addBtn";
    addBtn.innerText="+";
    addBtn.onclick=addBtnhandle;

    deleteBtn.type="button";
    deleteBtn.id="deleteBtn";
    deleteBtn.innerText="-";
    deleteBtn.onclick=deleteBtnhandle;

    document.getElementById("foldername").appendChild(newTextField);
    document.getElementById("foldername").appendChild(addBtn);
    document.getElementById("foldername").appendChild(deleteBtn);}
}

function addBtnhandle()
{
    foldername=document.getElementById("addFoldername").value;
    document.getElementById("addFoldername").value="";
    alert('You entered: ' + foldername);
}
function deleteBtnhandle()
{
    document.getElementById("foldername").removeChild(newTextField);
    document.getElementById("foldername").removeChild(addBtn);
    document.getElementById("foldername").removeChild(deleteBtn);
}