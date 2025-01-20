export const useRune = <T>(initialValue: T) => {
    const _rune = $state({ value: initialValue });
    return _rune;
};