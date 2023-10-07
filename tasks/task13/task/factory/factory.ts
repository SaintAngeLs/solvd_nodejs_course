type ParserFunc = (text: string) => any;

export const factory = (p: Record<string, ParserFunc>): ParserFunc => {
    return (text: string | null) => {
        if (text === null) return null;
      
        let out: any;
        const keys = Object.keys(p);

        for (let i = 0; i < keys.length; i++) {
            try {
                out = p[keys[i]](text);
                
            } catch (error) {
                console.log(error);
            }
            if (out !== null) {
                return out;
            }
        }
        return null;
    };
};
