/**
 * Class Stack ADT implemented as the Priority queue DS with basic stack operations
 */
export class Stack<T> {
    private items: Array<{ val: T, priority: number }>;
    private currentPriority: number;

    constructor() 
    {
        this.items = [];
        this.currentPriority = 0;
    }

    /**
     * 
     * @param item 
     */
    push(item: T) 
    {
        this.items.push({ val: item, priority: this.currentPriority });
        this.currentPriority++;
    }

    /**
     * 
     * @returns 
     */
    pop(): T | null 
    {
        if (this.items.length === 0) 
            return null;
        return this.items.pop()?.val || null;
    }

    /**
     * peek method of the in the stack ADT
     * @returns 
     */
    peek(): T | null 
    {
        if (this.items.length === 0) 
            return null;
        return this.items[this.items.length - 1].val;
    }
}

/**
 * MinMaxStack DS class with the priprity defined
 */
export class MinMaxStack<T> {
    private items: T[];
    private minStack: T[];
    private maxStack: T[];

    constructor() {
        this.items = [];
        this.minStack = [];
        this.maxStack = [];
    }

    /**
     * Pushes an item onto the stack and updates auxiliary stacks.
     * 
     * @param item - The item to push onto the stack.
     */
    push(item: T) 
    {
        this.items.push(item);

        // If minStack is empty or item is less than or equal to top of minStack, push to minStack
        if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) 
        {
            this.minStack.push(item);
        }

        // If maxStack is empty or item is greater than or equal to top of maxStack, push to maxStack
        if (this.maxStack.length === 0 || item >= this.maxStack[this.maxStack.length - 1]) 
        {
            this.maxStack.push(item);
        }
    }

    /**
     * Pops an item from the stack and updates auxiliary stacks.
     * 
     * @returns The item that was removed from the stack, or null if the stack was empty.
     */
    pop(): T | null 
    {
        if (this.items.length === 0) 
            return null;

        const poppedValue = this.items.pop()!;

        // Update minStack and maxStack if necessary
        if (poppedValue === this.minStack[this.minStack.length - 1]) 
        {
            this.minStack.pop();
        }

        if (poppedValue === this.maxStack[this.maxStack.length - 1]) 
        {
            this.maxStack.pop();
        }

        return poppedValue;
    }

    /**
     * Peeks at the top item of the stack without popping it.
     * 
     * @returns The top item of the stack, or null if the stack is empty.
     */
    peek(): T | null 
    {
        if (this.items.length === 0) 
            return null;

        return this.items[this.items.length - 1];
    }

    /**
     * Retrieves the minimum item in the stack.
     * 
     * @returns The minimum item of the stack, or null if the stack is empty.
     */
    getMin(): T | null 
    {
        if (this.minStack.length === 0) 
            return null;

        return this.minStack[this.minStack.length - 1];
    }

    /**
     * Retrieves the maximum item in the stack.
     * 
     * @returns The maximum item of the stack, or null if the stack is empty.
     */
    getMax(): T | null 
    {
        if (this.maxStack.length === 0) 
            return null;

        return this.maxStack[this.maxStack.length - 1];
    }
}



/**
 * Exmaple Queue Add implemented as the priority queue
 */
export class Queue<T> {
    private items: Array<{ val: T, priority: number }>;
    private currentPriority: number;

    constructor() 
    {
        this.items = [];
        this.currentPriority = 0;
    }

    /**
     * Enfqueue operation of the Queue ADT
     * @param item 
     */
    enqueue(item: T) 
    {
        this.items.push({ val: item, priority: this.currentPriority });
        this.currentPriority++;
    }

    /**
     * Dequeue operation of the queue ADT
     * @returns 
     */
    dequeue(): T | null 
    {
        if (this.items.length === 0) return null;
        return this.items.shift()?.val || null;
    }

    peek(): T | null 
    {
        if (this.items.length === 0) return null;
        return this.items[0].val;
    }
}


 
export class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;

    constructor(value: T) 
    {
        this.value = value;
    }
}

export class BinaryTree<T extends number | string> {

    root: TreeNode<T> | null = null;

    /**
     * Inserts a node into the binary tree in a general manner, 
     * filling from left to right. It does not respect the properties 
     * of a Binary Search Tree (BST) but inserts nodes in the order they come.
     * 
     * @param value 
     * @returns 
     */
    insertGeneral(value: T) 
    {
        if (!this.root) 
        {
            this.root = new TreeNode(value);
            return;
        }

        const queue: TreeNode<T>[] = [this.root];
        while (queue.length) 
        {
            let current = queue.shift()!;
            
            if (!current.left) 
            {
                current.left = new TreeNode(value);
                break;
            } 
            else 
            {
                queue.push(current.left);
            }
            
            if (!current.right) 
            {
                current.right = new TreeNode(value);
                break;
            } 
            else 
            {
                queue.push(current.right);
            }
        }
    }

    // Insert a node in a BST manner
    insert(value: T) 
    {
        this.root = this._insert(this.root, value);
    }

    /**
     * Recursively finds the correct location to insert a new node 
     * in the binary tree such that the properties of a BST are maintained.
     * 
     * @param node 
     * @param value 
     * @returns 
     */
    _insert(node: TreeNode<T> | null, value: T): TreeNode<T> 
    {
        if (!node) 
        {
            return new TreeNode(value);
        }

        if (value < node.value) 
        {
            node.left = this._insert(node.left, value);
        }
        else if (value > node.value) 
        {
            node.right = this._insert(node.right, value);
        }

        return node;
    }

    /**
     * Searches for a value in the binary tree.
     * 
     * @param value 
     * @returns 
     */
    search(value: T): boolean 
    {
        return this._search(this.root, value);
    }

    /**
     * Recursively searches for a value in the binary tree starting from a given node.
     * 
     * @param node 
     * @param value 
     * @returns 
     */
    _search(node: TreeNode<T> | null, value: T): boolean 
    {
        if (!node) return false;
        if (node.value === value) return true;
        if (value < node.value) return this._search(node.left, value);
        return this._search(node.right, value);
    }

    inorder(): T[] 
    {
        let result: T[] = [];
        this._inorder(this.root, result);
        return result;
    }

    _inorder(node: TreeNode<T> | null, result: T[]) 
    {
        if (!node) return;
        this._inorder(node.left, result); // Traverse the left subtree
        result.push(node.value); // visit the root
        this._inorder(node.right, result); // Traverse the right subtree
    }


    preOrder(): T[] 
    {
        let result: T[] = [];
        this._preOrder(this.root, result);
        return result;
    }

    _preOrder(node: TreeNode<T> | null, result: T[]) 
    {
        if (!node) return;
        result.push(node.value); // Visit the root
        this._preOrder(node.left, result); // Traverse the left subtree
        this._preOrder(node.right, result); // Traverse the right subtree
    }

    postOrder(): T[] 
    {
        let result: T[] = [];
        this._postOrder(this.root, result);
        return result;
    }

    _postOrder(node: TreeNode<T> | null, result: T[]) 
    {
        if (!node) return;
        this._postOrder(node.left, result); // Traverse the left subtree
        this._postOrder(node.right, result); // Traverse the right subtree
        result.push(node.value); // Visit the root
    }

    // overloads for the BST isBst method type
    isBST(): boolean;
    isBST(min: number, max: number): boolean;
    /**
     * 
     * @param min 
     * @param max 
     * @returns 
     */
    isBST(min?: number, max?: number): boolean 
    {
        if (typeof this.root?.value === 'number') 
        {
            return this._isBST(this.root, min as any, max as any);
        }
        return this._isBST(this.root, undefined, undefined);
    }

    /**
     * 
     * @param node 
     * @param min 
     * @param max 
     * @returns 
     */
    _isBST(node: TreeNode<T> | null, min?: T, max?: T): boolean 
    {
        if (!node) 
            return true;

        if ((min !== undefined && node.value <= min) || 
            (max !== undefined && node.value >= max)) 
            return false;

        return this._isBST(node.left, min, node.value) && this._isBST(node.right, node.value, max);
    }
}

/**
 * The node of the list with the val and the next pointer
 */
export class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) 
    {
        this.value = value;
    }
}

/**
 * Singly linked list (unordered: max -> O(n), insert -> O(1)) DS
 */
export class LinkedList<T> {
    head: ListNode<T> | null = null;

    insert(value: T) 
    {
        if (!this.head) 
        {
            this.head = new ListNode(value);
            return;
        }

        let current = this.head;

        while (current.next) 
        {
            current = current.next;
        }
        current.next = new ListNode(value);
    }

    delete(value: T) 
    {
        if (!this.head) return;
        if (this.head.value === value) 
        {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.value !== value) 
        {
            current = current.next;
        }
        if (current.next) 
        {
            current.next = current.next.next;
        }
    }

    search(value: T): ListNode<T> | null 
    {
        let current = this.head;
        while (current && current.value !== value) 
        {
            current = current.next;
        }
        return current;
    }

    hasCycle(): boolean 
    {
        if (!this.head) 
            return false;

        let tortoise: ListNode<T> | null = this.head;
        let hare: ListNode<T> | null = this.head;

        while (hare && hare.next) 
        {
            if (tortoise === null) 
                break;
            tortoise = tortoise.next;
            hare = hare.next.next;

            if (tortoise === hare) 
            {
                return true;
            }
        }

        return false;
    }
}

/**
 * Graph class implementation with the adjecency matrix for the algorithms like the Floyd-Warszal or Fordp-Fulkerson
 */
export class Graph {
    private matrix: number[][] = [];
    private nodes: number = 0;

    addVertex() 
    {
        this.matrix.push(new Array(this.nodes).fill(0));
        this.nodes++;
        for (let i = 0; i < this.nodes; i++) 
        {
            if (typeof this.matrix[i][this.nodes-1] === 'undefined') 
            {
                this.matrix[i].push(0);
            }
        }
    }

    addEdge(v1: number, v2: number, weight: number = 1) 
    {
        this.matrix[v1][v2] = weight;
        this.matrix[v2][v1] = weight;
    }

    DFS(start: number) 
    {
        const visited = new Array(this.nodes).fill(false);
        const result: number[] = [];
        this._DFS(start, visited, result);
        return result;
    }

    _DFS(node: number, visited: boolean[], result: number[]) 
    {
        visited[node] = true;
        result.push(node);

        for (let i = 0; i < this.nodes; i++) 
        {
            if (this.matrix[node][i] && !visited[i])
            {
                this._DFS(i, visited, result);
            }
        }
    }



    BFS(start: number, end: number): number[] {
        const visited = new Array(this.nodes).fill(false);
        const queue: number[] = [];
        const prev = new Array(this.nodes).fill(-1);
        
        visited[start] = true;
        queue.push(start);

        while (queue.length) {
            const vertex = queue.shift()!;
            
            if (vertex === end) {
                return this.constructPath(prev, start, end);
            }

            for (let i = 0; i < this.nodes; i++) {
                if (this.matrix[vertex][i] && !visited[i]) {
                    prev[i] = vertex;
                    visited[i] = true;
                    queue.push(i);
                }
            }
        }
        return [];
    }

    dijkstra(start: number, end: number): number[] {
        const distances = new Array(this.nodes).fill(Infinity);
        const processed = new Array(this.nodes).fill(false);
        const prev = new Array(this.nodes).fill(-1);

        distances[start] = 0;

        for (let i = 0; i < this.nodes - 1; i++) {
            const u = this.minDistance(distances, processed);
            processed[u] = true;

            if (u === end) {
                return this.constructPath(prev, start, end);
            }

            for (let v = 0; v < this.nodes; v++) {
                if (!processed[v] && this.matrix[u][v] !== 0 && distances[u] !== Infinity && distances[u] + this.matrix[u][v] < distances[v]) {
                    distances[v] = distances[u] + this.matrix[u][v];
                    prev[v] = u;
                }
            }
        }

        return this.constructPath(prev, start, end);
    }

    private constructPath(prev: number[], start: number, end: number): number[] {
        const path: number[] = [];
        for (let at = end; at !== -1; at = prev[at]) {
            path.push(at);
        }
        path.reverse();
        if (path[0] === start) return path;
        return [];
    }

    private minDistance(distances: number[], processed: boolean[]): number 
    {
        let min = Infinity;
        let minIndex = -1;

        for (let v = 0; v < this.nodes; v++) 
        {
            if (processed[v] === false && distances[v] <= min) 
            {
                min = distances[v];
                minIndex = v;
            }
        }
        return minIndex;
    }
}


/**
 *  RB trees properties that are used in the followind implementation:
 *  Every node is either red or black.
    The root node is black.
    All leaves (NIL) are black.
    If a red node has children then, the children are always black.
    Every path from a node to its descendant NIL nodes has the same number of black nodes.
 */

    /** Sentinel node */

export const NIL_LEAF: RBNode = {
    data: -1,
    parent: null,
    left: null as any,  // we'll assign this later
    right: null as any, // we'll assign this later
    color: 0            // black
};


/**
 * Represents a node in a Red-Black Tree.
 */
export class RBNode {
    data: number;
    parent: RBNode | null;
    left: RBNode;
    right: RBNode;
    color: number;  // 1 for red, 0 for black

    constructor(data: number) 
    {
        this.data = data;
        this.parent = null;
        this.left = NIL_LEAF;
        this.right = NIL_LEAF;
        this.color = 1;
    }
}

/** Sentinel node to represent the NIL leaves */

NIL_LEAF.color = 0;
NIL_LEAF.left = NIL_LEAF;
NIL_LEAF.right = NIL_LEAF;

/**
 * Represents a Red-Black Tree data structure.
 */
export class RedBlackTree {
    root: RBNode;

    constructor() 
    {
        this.root = NIL_LEAF;
    }

    /**
     * Inserts a new node into the tree and ensures it remains balanced.
     * @param key - The value to be added.
     */
    insert(key: number) 
    {
        let node: RBNode = new RBNode(key);
        this.insertNode(node);
        this.fixInsert(node);
    }

    /**
     * Inserts a node into the Red-Black Tree.
     * This method is an implementation of the standard binary tree insertion,
     * followed by the call to fix any violations of the RBTree properties.
     * 
     * @param node - The RBNode to be inserted.
     */
    private insertNode(node: RBNode) 
    {
        let y: RBNode | null = null;
        let x: RBNode = this.root;

        while (x !== NIL_LEAF) 
        {
            y = x;
            if (node.data < x.data) 
            {
                x = x.left;
            } 
            else 
            {
                x = x.right;
            }
        }

        node.parent = y;
        if (!y) 
        {
            this.root = node;
        } 
        else if (node.data < y.data) 
        {
            y.left = node;
        } 
        else 
        {
            y.right = node;
        }

        if (!node.parent) 
        {
            node.color = 0;
            return;
        }

        if (!node.parent.parent) 
        {
            return;
        }

        if (node.parent && node.parent.parent) 
        {
            return;
        }
    }


    /**
     * Fixes the tree after the insertion of a node.
     * If the red-black tree properties are violated due to the insertion,
     * this method restores those properties through rotations and color changes.
     * 
     * @param node - The RBNode recently inserted.
     */
    private fixInsert(node: RBNode) 
    {
        let uncle: RBNode;

        while (node.parent && node.parent.color === 1)
        {
            const parent = node.parent;
            const grandParent = parent.parent;
    
            if (!grandParent) break;  // ensure grandparent exists
    
            if (parent === grandParent.left) 
            {
                uncle = grandParent.right;
    
                if (uncle.color === 1) 
                {
                    // Case 1: Uncle is red
                    parent.color = 0;
                    uncle.color = 0;
                    grandParent.color = 1;
                    node = grandParent;
                } 
                else 
                {
                    if (node === parent.right) 
                    {
                        // Case 2: Node is a right child
                        node = parent;
                        this.rotateLeft(node);
                    }
                    // Case 3: Node is a left child
                    parent.color = 0;
                    grandParent.color = 1;
                    this.rotateRight(grandParent);
                }
            } 
            else 
            {
                uncle = grandParent.left;
    
                if (uncle.color === 1) 
                {
                    // Mirror Case 1: Uncle is red
                    parent.color = 0;
                    uncle.color = 0;
                    grandParent.color = 1;
                    node = grandParent;
                } 
                else 
                {
                    if (node === parent.left) 
                    {
                        // Mirror Case 2: Node is a left child
                        node = parent;
                        this.rotateRight(node);
                    }
                    // Mirror Case 3: Node is a right child
                    parent.color = 0;
                    grandParent.color = 1;
                    this.rotateLeft(grandParent);
                }
            }
        }
        this.root.color = 0;
    }

    // The idea originnaly was from the B-trees and 2-3-4 HV as their 
    // derivatives but insted of changing the changing the pointers type
    // by bijection between all the 2-3-4 to the RB and form the 2-3-4 to the AVL
    // to perform the balanging and than transforming throught the bijection back 
    // the rotation is performd on the RB

    /**
     * Performs a left rotation on the provided node.
     * Left rotations are used to preserve the balancing properties of a Red-Black Tree.
     *
     * Example:
     * Before:
     *     x
     *      \
     *       y
     *      / \
     *     T2  z
     * 
     * After:
     *       y
     *      / \
     *     x   z
     *      \
     *      T2
     * 
     * Here, the node `y` becomes the new parent node, and `x` becomes its left child.
     * The subtree `T2` moves from being the left child of `y` to the right child of `x`.
     *
     * @param x - The node on which to perform the left rotation.
     */
    private rotateLeft(x: RBNode) 
    {
        let y: RBNode = x.right;
        x.right = y.left;
        if (y.left !== NIL_LEAF) 
        {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (!x.parent) 
        {
            this.root = y;
        } 
        else if (x === x.parent.left) 
        {
            x.parent.left = y;
        } 
        else 
        {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
    }

    /**
     * Performs a right rotation on the provided node.
     * Right rotations are used to preserve the balancing properties of a Red-Black Tree.
     *
     * Example:
     * Before:
     *       x
     *      /
     *     y
     *    / \
     *   z   T2
     * 
     * After:
     *     y
     *    / \
     *   z   x
     *        /
     *       T2
     * 
     * Here, the node `y` becomes the new parent node, and `x` becomes its right child.
     * The subtree `T2` moves from being the right child of `y` to the left child of `x`.
     *
     * @param x - The node on which to perform the right rotation.
     */
    private rotateRight(x: RBNode) 
    {
        let y: RBNode = x.left;
        x.left = y.right;
        if (y.right !== NIL_LEAF) 
        {
            y.right.parent = x;
        }
        y.parent = x.parent;
        if (!x.parent) 
        {
            this.root = y;
        } 
        else if (x === x.parent.right) 
        {
            x.parent.right = y;
        } 
        else 
        {
            x.parent.left = y;
        }
        y.right = x;
        x.parent = y;
    }

    /**
     * Searches for a node with the given value.
     * @param key - The value to be searched.
     * @returns - The node if found, or the sentinel NIL node.
     */
    search(key: number): RBNode 
    {
        return this.searchTree(this.root, key);
    }

    private searchTree(node: RBNode, key: number): RBNode 
    {
        if (node === NIL_LEAF || key === node.data) 
        {
            return node;
        }

        // Search as the binary search tree(with the respect to the properties) 
        // implying the worst case of the O(n)

        if (key < node.data) 
        {
            return this.searchTree(node.left, key);
        }
        return this.searchTree(node.right, key);
    }
}
