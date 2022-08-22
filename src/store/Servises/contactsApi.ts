import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IContact} from "../models/iContact";

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token')
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers;
        },

    }),
    tagTypes: ['Contact'],
    endpoints: (build) => ({
        fetchAllContacts: build.query<IContact[], string>({
            query: (searchString) => ({
                url: '/contacts',
                params: searchString ? {q: searchString} : {}
            }),
            providesTags: result => ['Contact']
        }),
        createContact: build.mutation<IContact, IContact>({
            query: (contact) => ({
                url: '/contacts',
                method: 'POST',
                body: contact
            }),
            invalidatesTags: ['Contact']
        }),
        updateContact: build.mutation<IContact, IContact>({
            query: (contact) => ({
                url: `/contacts/${contact.id}`,
                method: 'PUT',
                body: contact
            }),
            invalidatesTags: ['Contact']
        }),
        deleteContact: build.mutation<IContact, IContact>({
            query: (contact) => ({
                url: `/contacts/${contact.id}`,
                method: 'DELETE',
                body: contact
            }),
            invalidatesTags: ['Contact']
        }),
    })
})