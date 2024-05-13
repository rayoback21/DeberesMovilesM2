import create from 'zustand';

interface CandyState {
    quantity: any;
    candies: {
        chocolate: number;
        caramel: number;
        fruit: number;
    };

    produce: (type: string, by: number) => void;
    distribute: (type: string, by: number) => void;
}

export const useCandyStore = create<CandyState>((set) => ({
    quantity: null,
    candies: {
        chocolate: 10,
        caramel: 0,
        fruit: 0,
    },

    produce: (type, by) => {
        set((state) => ({
            candies: {
                ...state.candies,
                [type as keyof typeof state.candies]: state.candies[type as keyof typeof state.candies] + by,
            },
        }));
    },

    distribute: (type, by) => {
        set((state) => ({
            candies: {
                ...state.candies,
                [type as keyof typeof state.candies]: state.candies[type as keyof typeof state.candies] - by,
            },
        }));
    },
}));
