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

    addEdge(v1: number, v2: number) 
    {
        this.matrix[v1][v2] = 1;
        this.matrix[v2][v1] = 1;
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

    BFS(start: number): number[] 
    {
        const visited = new Array(this.nodes).fill(false);
        const result: number[] = [];
        const queue: number[] = [];
        visited[start] = true;
        queue.push(start);

        while (queue.length) 
        {
            const vertex = queue.shift()!;
            result.push(vertex);
            
            for (let i = 0; i < this.nodes; i++) 
            {
                if (this.matrix[vertex][i] && !visited[i]) 
                {
                    visited[i] = true;
                    queue.push(i);
                }
            }
        }
        return result;
    }

    dijkstra(start: number): number[] {
        const distances = new Array(this.nodes).fill(Infinity);
        const processed = new Array(this.nodes).fill(false);

        distances[start] = 0;

        for (let i = 0; i < this.nodes - 1; i++) 
        {
            const u = this.minDistance(distances, processed);
            processed[u] = true;

            for (let v = 0; v < this.nodes; v++) 
            {
                if (!processed[v] &&
                    this.matrix[u][v] !== 0 &&
                    distances[u] !== Infinity &&
                    distances[u] + this.matrix[u][v] < distances[v]) 
                {
                    distances[v] = distances[u] + this.matrix[u][v];
                }
            }
        }
        return distances;
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
