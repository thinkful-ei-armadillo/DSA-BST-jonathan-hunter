'use strict';

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
  // console.log(treeHeightTest(BST));
}

function drill4() {
  let testBST = new BinarySearchTree();
  testBST.insert(3, 3);
  testBST.insert(1, 1);
  testBST.insert(4, 4);
  testBST.insert(6, 6);
  testBST.insert(9, 9);
  testBST.insert(2, 2);
  testBST.insert(5, 5);
  testBST.insert(7, 7);

  const root = testBST.key;
  const isBST = testBST => {
    if (testBST.left !== null) {
      if (testBST.key > root) {
        return false;
      } else if (testBST.key < root) {
        isBST(testBST.left);
      } else {
        return true;
      }
    } else if (testBST.right !== null) {
      if (testBST.key < root) {
        return;
      } else if (testBST.key >= root) {
        isBST(testBST.right);
      } else {
        console.log('i ran');
        return true;
      }
      return false;
    }
  };
  console.log(isBST(testBST));
}

function treeHeightTest(bst) {
  if (!bst) {
    return 0;
  }

  let lengthL = treeHeightTest(bst.left);
  let lengthR = treeHeightTest(bst.right);

  return 1 + Math.max(lengthL, lengthR);
}

function drill5() {
  let BST = new BinarySearchTree();
  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);
  const arr = [];

  const thirdLargest = bst => {
    if (bst.left !== null) {
      arr.push(bst.left.key);
      thirdLargest(bst.left);
    }
    if (bst.right !== null) {
      arr.push(bst.right.key);
      thirdLargest(bst.right);
    }
  };
  thirdLargest(BST);
  arr.push(BST.key);
  return arr.sort()[arr.length - 3];
}

// console.log(drill5());
//drill4();
