export interface mealUploadType {
    name: string,
    imageUrl: string
}

export interface allMealType {
    name: string,
    imageUrl: string,
    id: string
}

export interface noticeType {
    title: string,
    description: string,
    imageUrl: string
}

export interface tokenRegistrationType {
    id: number | string,
    name: string,
    email: string,
    start: Date | string,
    end: Date | string,
    transactionId: string,
    verified: boolean
}

export interface reviewType {
    id: string | number,
    name: string,
    title: string,
    description: string
}

export interface requestType {
    hallName: string,
    itemName: string,
    quantity: string,
    requestId ?: string,
}

export interface studentType {
    studentId: string,
    name: string,
    email: string,
    startDate: string,
    endDate: string,
    id: string,
    transactionId: string
}