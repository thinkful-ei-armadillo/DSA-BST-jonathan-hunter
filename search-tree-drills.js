const BinarySearchTree = require('./binary-search-tree');

function drill1() {
  let BST = new BinarySearchTree();
  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);
}

function drill2() {
  let BST = new BinarySearchTree();
  BST.insert('e', 'e');
  BST.insert('a', 'a');
  BST.insert('s', 's');
  BST.insert('y', 'y');
  BST.insert('q', 'q');
  BST.insert('u', 'u');
  BST.insert('e', 'e');
  BST.insert('s', 's');
  BST.insert('t', 't');
  BST.insert('i', 'i');
  BST.insert('o', 'o');
  BST.insert('n', 'n');
}

function drill3() {
  let BST = new BinarySearchTree();
  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);
  treeHeight(BST);
}

function treeHeight(bst) {
  let leftCount = 0;
  let rightCount = 0;

  const rightSide = (bst, rightCount=0) => {
    
    if (bst.right !== null) {
      rightCount++;
      bst = bst.right;
      rightSide(bst, leftCount);
    }

    else if (bst.left !== null) {
      rightCount++;
      bst = bst.left;
      rightSide(bst, leftCount);
    }
    
    return rightCount;
  };
  
  const leftSide = (bst, leftCount=0) => {
    if (bst.right === null && bst.left === null) {
      return leftCount;
    }
    // after right side check is done move to left side
    
    if (bst.right !== null) {
      leftCount++;
      bst = bst.right;
      leftSide(bst, leftCount);
    }
  
    else if (bst.left !== null) {
      leftCount++;
      bst = bst.left;
      leftSide(bst, leftCount);
    }
    
    return leftCount;
  };
  // first move through left side of tree
  if (bst.left !== null) {
    leftCount = leftSide(bst, leftCount);
  }
  // move through right side of tree
  if (bst.right !== null) {
    rightCount = rightSide(bst, rightCount);
  }
  console.log(leftCount, rightCount);
}

drill3();
