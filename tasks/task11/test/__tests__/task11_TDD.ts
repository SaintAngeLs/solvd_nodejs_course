import { Stack, MinMaxStack, Queue, BinaryTree, LinkedList, Graph, RedBlackTree, NIL_LEAF, RBNode } from '../../task/task11'; 

// Stack tests
describe('Stack', () => {
    it('should push to the stack', () => {
        const stack = new Stack<number>();
        stack.push(5);
        expect(stack.peek()).toBe(5);
    });

    it('should pop from the stack', () => {
        const stack = new Stack<number>();
        stack.push(5);
        stack.push(10);
        expect(stack.pop()).toBe(10);
        expect(stack.peek()).toBe(5);
    });

    it('should return null on pop from empty stack', () => {
        const stack = new Stack<number>();
        expect(stack.pop()).toBeNull();
    });

    it('should return null on peek from empty stack', () => {
        const stack = new Stack<number>();
        expect(stack.peek()).toBeNull();
    });
});

// MinMaxStack tests
describe('MinMaxStack', () => {
    it('should push to the stack', () => {
        const stack = new MinMaxStack<number>();
        stack.push(5);
        expect(stack.peek()).toBe(5);
    });

    it('should pop from the stack', () => {
        const stack = new MinMaxStack<number>();
        stack.push(5);
        stack.push(10);
        expect(stack.pop()).toBe(10);
        expect(stack.peek()).toBe(5);
    });

    it('should get minimum from the stack', () => {
        const stack = new MinMaxStack<number>();
        stack.push(10);
        stack.push(5);
        stack.push(20);
        expect(stack.getMin()).toBe(5);
    });

    it('should get maximum from the stack', () => {
        const stack = new MinMaxStack<number>();
        stack.push(10);
        stack.push(5);
        stack.push(20);
        expect(stack.getMax()).toBe(20);
    });

    it('should update minimum after pops', () => {
        const stack = new MinMaxStack<number>();
        stack.push(10);
        stack.push(5);
        stack.push(20);
        stack.pop();  // Remove 20
        expect(stack.getMin()).toBe(5);
        stack.pop();  // Remove 5
        expect(stack.getMin()).toBe(10);
    });

    it('should update maximum after pops', () => {
        const stack = new MinMaxStack<number>();
        stack.push(10);
        stack.push(5);
        stack.push(20);
        stack.pop();  // Remove 20
        expect(stack.getMax()).toBe(10);
        stack.pop();  // Remove 5
        expect(stack.getMax()).toBe(10);
    });

    it('should return null on pop from empty stack', () => {
        const stack = new MinMaxStack<number>();
        expect(stack.pop()).toBeNull();
    });

    it('should return null on peek from empty stack', () => {
        const stack = new MinMaxStack<number>();
        expect(stack.peek()).toBeNull();
    });

    it('should return null for getMin on empty stack', () => {
        const stack = new MinMaxStack<number>();
        expect(stack.getMin()).toBeNull();
    });

    it('should return null for getMax on empty stack', () => {
        const stack = new MinMaxStack<number>();
        expect(stack.getMax()).toBeNull();
    });
});



describe('Queue<T> class', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    it('should initialize an empty queue', () => {
        expect(queue.peek()).toBe(null);
    });

    it('should enqueue items with increasing priority', () => {
        queue.enqueue(5);
        queue.enqueue(10);
        queue.enqueue(15);

        expect(queue.peek()).toBe(5);
    });

    it('should dequeue items in the order they were enqueued', () => {
        queue.enqueue(5);
        queue.enqueue(10);
        queue.enqueue(15);

        expect(queue.dequeue()).toBe(5);
        expect(queue.dequeue()).toBe(10);
        expect(queue.dequeue()).toBe(15);
    });

    it('should return null for dequeue on an empty queue', () => {
        expect(queue.dequeue()).toBe(null);
    });

    it('should return the front item for peek without removing it', () => {
        queue.enqueue(5);
        queue.enqueue(10);

        expect(queue.peek()).toBe(5);
        expect(queue.peek()).toBe(5); // Ensuring peek doesn't remove the item.
    });

    it('should return null for peek on an empty queue', () => {
        expect(queue.peek()).toBe(null);
    });

    it('should handle interleaved enqueue and dequeue operations', () => {
        queue.enqueue(5);
        queue.enqueue(10);
        expect(queue.dequeue()).toBe(5);

        queue.enqueue(15);
        expect(queue.peek()).toBe(10);
    });
});


// tests for the Binary tree


describe('BinaryTree<T> class', () => {

    describe('General Insertion', () => {
        let tree: BinaryTree<number>;

        beforeEach(() => {
            tree = new BinaryTree<number>();
        });

        it('should insert nodes in a general manner', () => {
            tree.insertGeneral(1);
            tree.insertGeneral(2);
            tree.insertGeneral(3);

            expect(tree.root!.value).toBe(1);
            expect(tree.root!.left!.value).toBe(2);
            expect(tree.root!.right!.value).toBe(3);
        });
    });

    describe('BST Insertion and Searching', () => {
        let tree: BinaryTree<number>;

        beforeEach(() => {
            tree = new BinaryTree<number>();
        });

        it('should insert nodes in a BST manner', () => {
            tree.insert(5);
            tree.insert(3);
            tree.insert(8);

            expect(tree.root!.value).toBe(5);
            expect(tree.root!.left!.value).toBe(3);
            expect(tree.root!.right!.value).toBe(8);
        });

        it('should search for values correctly in BST', () => {
            tree.insert(5);
            tree.insert(3);
            tree.insert(8);
            
            expect(tree.search(5)).toBe(true);
            expect(tree.search(3)).toBe(true);
            expect(tree.search(8)).toBe(true);
            expect(tree.search(10)).toBe(false);
        });
    });

    describe('Traversals', () => {
        let tree: BinaryTree<number>;

        beforeEach(() => {
            tree = new BinaryTree<number>();
            tree.insert(5);
            tree.insert(3);
            tree.insert(7);
            tree.insert(2);
            tree.insert(4);
            tree.insert(6);
            tree.insert(8);
        });

        it('should perform inorder traversal correctly', () => {
            expect(tree.inorder()).toEqual([2, 3, 4, 5, 6, 7, 8]);
        });

        it('should perform preOrder traversal correctly', () => {
            expect(tree.preOrder()).toEqual([5, 3, 2, 4, 7, 6, 8]);
        });

        it('should perform postOrder traversal correctly', () => {
            expect(tree.postOrder()).toEqual([2, 4, 3, 6, 8, 7, 5]);
        });
    });

    describe('BST Property Check', () => {
        let tree: BinaryTree<number>;

        beforeEach(() => {
            tree = new BinaryTree<number>();
        });

        it('should recognize a valid BST', () => {
            tree.insert(5);
            tree.insert(3);
            tree.insert(8);

            expect(tree.isBST()).toBe(true);
        });

        it('should recognize a non-valid BST', () => {
            tree.insertGeneral(5);
            tree.insertGeneral(8);
            tree.insertGeneral(3);

            expect(tree.isBST()).toBe(false);
        });
    });
});



describe('LinkedList<T> class', () => {

    describe('Insertion', () => {
        let list: LinkedList<number>;

        beforeEach(() => {
            list = new LinkedList<number>();
        });

        it('should insert nodes correctly', () => {
            list.insert(1);
            list.insert(2);
            list.insert(3);
            
            expect(list.head!.value).toBe(1);
            expect(list.head!.next!.value).toBe(2);
            expect(list.head!.next!.next!.value).toBe(3);
        });
    });

    describe('Deletion', () => {
        let list: LinkedList<number>;

        beforeEach(() => {
            list = new LinkedList<number>();
            list.insert(1);
            list.insert(2);
            list.insert(3);
        });

        it('should delete nodes correctly', () => {
            list.delete(2);

            expect(list.head!.value).toBe(1);
            expect(list.head!.next!.value).toBe(3);
        });

        it('should handle deleting a non-existent node', () => {
            list.delete(4);

            expect(list.head!.value).toBe(1);
            expect(list.head!.next!.value).toBe(2);
            expect(list.head!.next!.next!.value).toBe(3);
        });
    });

    describe('Searching', () => {
        let list: LinkedList<number>;

        beforeEach(() => {
            list = new LinkedList<number>();
            list.insert(1);
            list.insert(2);
            list.insert(3);
        });

        it('should find an existing node', () => {
            let node = list.search(2);

            expect(node!.value).toBe(2);
        });

        it('should return null for non-existent node', () => {
            let node = list.search(4);

            expect(node).toBe(null);
        });
    });

    describe('Cycle Detection', () => {
        let list: LinkedList<number>;

        beforeEach(() => {
            list = new LinkedList<number>();
        });

        it('should detect no cycle in normal list', () => {
            list.insert(1);
            list.insert(2);
            list.insert(3);

            expect(list.hasCycle()).toBe(false);
        });

        it('should detect cycle', () => {
            list.insert(1);
            list.insert(2);
            list.insert(3);
            list.head!.next!.next!.next = list.head!.next;

            expect(list.hasCycle()).toBe(true);
        });
    });
});
describe('Graph class', () => {

    describe('Vertex and Edge Operations', () => {
        let graph: Graph;

        beforeEach(() => {
            graph = new Graph();
            graph.addVertex(); // 0
            graph.addVertex(); // 1
            graph.addVertex(); // 2
            graph.addEdge(0, 1);
            graph.addEdge(1, 2);
        });

        it('should add vertices correctly', () => {
            // For this specific test, we're assuming a dijkstra run from 0 to 2
            expect(graph.dijkstra(0, 2)).toEqual([0, 1, 2]);
        });

        it('should add edges correctly', () => {
            expect(graph.BFS(0, 2)).toEqual([0, 1, 2]);
            // For this specific test, DFS is used in a depth-first manner, not considering the end node
            expect(graph.DFS(0)).toEqual([0, 1, 2]);
        });
    });

    describe('DFS', () => {
        let graph: Graph;

        beforeEach(() => {
            graph = new Graph();
            graph.addVertex(); // 0
            graph.addVertex(); // 1
            graph.addVertex(); // 2
            graph.addVertex(); // 3
            graph.addEdge(0, 1);
            graph.addEdge(1, 2);
            graph.addEdge(2, 3);
        });

        it('should traverse graph using DFS correctly', () => {
            expect(graph.DFS(0)).toEqual([0, 1, 2, 3]);
        });
    });

    describe(' BFS szefa ', () => {
        let graph: Graph;

        beforeEach(() => {
            graph = new Graph();
            graph.addVertex(); // 0
            graph.addVertex(); // 1
            graph.addVertex(); // 2
            graph.addVertex(); // 3
            graph.addEdge(0, 1);
            graph.addEdge(1, 2);
            graph.addEdge(2, 3);
        });

        it('should traverse graph using BFS correctly', () => {
            expect(graph.BFS(0, 3)).toEqual([0, 1, 2, 3]);
        });

        describe('===================== BFS szefa =====================', () => {
            let graph: Graph;
            const SIZE = 1000;
            const SUBGRAPH_SIZE = 900; // First 900 vertices are densely connected
        
            beforeEach(() => {
                graph = new Graph();
        
                // Adding vertices
                for (let i = 0; i < SIZE; i++) {
                    graph.addVertex();
                }
        
                // Connecting first 900 vertices densely
                for (let i = 0; i < SUBGRAPH_SIZE; i++) {
                    for (let j = i + 1; j < SUBGRAPH_SIZE; j++) {
                        graph.addEdge(i, j);
                    }
                }
        
                // Connecting last 100 vertices densely among themselves
                for (let i = SUBGRAPH_SIZE; i < SIZE; i++) {
                    for (let j = i + 1; j < SIZE; j++) {
                        graph.addEdge(i, j);
                    }
                }
            });
        
            it('BFS should not traverse to the disconnected subgraph', () => {
                const result = graph.BFS(0, SIZE - 1);
                // Since 0 and SIZE-1 belong to different subgraphs, BFS should not find a path
                expect(result).toEqual([]); // Assuming BFS returns undefined if no path is found.
            });
        
            it('BFS should traverse within a connected subgraph', () => {
                const result = graph.BFS(0, SUBGRAPH_SIZE - 1);
                // Assuming shortest path is returned, in a dense graph with equal weights, BFS should find the direct path
                expect(result).toEqual([0, SUBGRAPH_SIZE - 1]);
            });
        });
    
    });

    
    describe('Dijkstra Algorithm', () => {
        let graph: Graph;

        beforeEach(() => {
            graph = new Graph();
            graph.addVertex(); // 0
            graph.addVertex(); // 1
            graph.addVertex(); // 2
            graph.addVertex(); // 3
            graph.addEdge(0, 1);
            graph.addEdge(1, 2);
            graph.addEdge(2, 3);
            // Add weights here as your Graph currently handles unweighted edges
        });

        it('should find shortest path using Dijkstra algorithm', () => {
            expect(graph.dijkstra(0, 3)).toEqual([0, 1, 2, 3]);
        });
    });
    describe('===================== Dijkstra szefa =====================', () => {
        let graph: Graph;
        const SIZE = 10000;
    
        beforeEach(() => {
            graph = new Graph();
    
            // Adding vertices
            for (let i = 0; i < SIZE; i++) {
                graph.addVertex();
            }
    
            // Making it dense
            for (let i = 0; i < SIZE; i++) {
                for (let j = i+1; j < SIZE; j++) {
                    graph.addEdge(i, j);
                    // Optionally add weights here. If not, it implies equal cost.
                }
            }
        });
    
        it('should handle large dense graphs using Dijkstra algorithm', () => {
            const result = graph.dijkstra(0, SIZE - 1);
            // For a dense graph, the shortest path from 0 to SIZE-1 should be a direct path if all weights are equal
            expect(result).toEqual([0, SIZE - 1]);
        });
    });
    

});


// RB trees tests:

describe('Red-Black Tree', () => {

    let rbt: RedBlackTree;

    beforeEach(() => {
        rbt = new RedBlackTree();
    });

    // Test 1: Insertion of a single node
    it('should correctly insert a single node', () => {
        rbt.insert(10);
        expect(rbt.root.data).toBe(10);
        expect(rbt.root.color).toBe(0);  // Root should be black
    });

    // Test 2: Root should always remain black after multiple insertions
    it('should ensure the root node remains black after insertions', () => {
        rbt.insert(10);
        rbt.insert(15);
        rbt.insert(5);
        expect(rbt.root.color).toBe(0);
    });

    // Test 3: Red node should not have red children
    it('should ensure no red node has a red child', () => {
        rbt.insert(10);
        rbt.insert(15);
        rbt.insert(5);
        rbt.insert(2);
        rbt.insert(7);
        rbt.insert(12);
        rbt.insert(18);

        const validateNoRedHasRedChild = (node: RBNode): boolean => {
            if (node === NIL_LEAF) return true;
            if (node.color === 1) {
                if (node.left.color === 1 || node.right.color === 1) return false;
            }
            return validateNoRedHasRedChild(node.left) && validateNoRedHasRedChild(node.right);
        };

        expect(validateNoRedHasRedChild(rbt.root)).toBe(true);
    });

    // Test 4: Search function
    it('should return the correct node for search', () => {
        rbt.insert(10);
        rbt.insert(15);
        expect(rbt.search(10).data).toBe(10);
        expect(rbt.search(15).data).toBe(15);
        expect(rbt.search(5)).toBe(NIL_LEAF);  // Not found
    });

    // Test 5: Black height validation (Every path from a node to its descendant NIL nodes has the same number of black nodes)
    it('should maintain correct black height property', () => {
        rbt.insert(10);
        rbt.insert(15);
        rbt.insert(5);
        rbt.insert(2);
        rbt.insert(7);
        rbt.insert(12);
        rbt.insert(18);

        const blackHeight = (node: RBNode): number => {
            if (node === NIL_LEAF) return 1;  // NIL nodes are black
            const leftBlackHeight = blackHeight(node.left);
            const rightBlackHeight = blackHeight(node.right);
            if (leftBlackHeight !== rightBlackHeight || leftBlackHeight === -1 || rightBlackHeight === -1) return -1;
            return node.color === 0 ? leftBlackHeight + 1 : leftBlackHeight;
        };

        expect(blackHeight(rbt.root)).not.toBe(-1);
    });


});

