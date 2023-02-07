;(() => {
    'use strict'
    const e = require('dotenv'),
        s = require('express'),
        t = require('morgan'),
        r = require('jsonwebtoken'),
        o = require('validator'),
        a = require('mongoose'),
        i = require('bcrypt'),
        n = new (0, a.Schema)({
            email: { type: String, required: !0, unique: !0 },
            password: { type: String, required: !0 },
        })
    ;(n.statics.signup = async function (e, s) {
        if (!e || !s) throw Error("Email and Password fields can't be empty.")
        if (!o.isEmail(e)) throw Error('Email is invalid')
        if (!o.isStrongPassword(s))
            throw Error('Password is not strong enough.')
        if (await this.findOne({ email: e }))
            throw Error('Email already in use.')
        const t = await i.hash(s, 10)
        return await this.create({ email: e, password: t })
    }),
        (n.statics.login = async function (e, s) {
            if (!e || !s)
                throw Error("Email and Password fields can't be empty.")
            const t = await this.findOne({ email: e })
            if (!t) throw Error('Email does not exist.')
            const r = t.password
            if (await i.compare(s, r)) return t
            throw Error('Email or Password is incorrect.')
        })
    const c = a.model('User', n)
    e.config()
    const d = new (0, a.Schema)(
            {
                title: { type: String, required: !0 },
                author: { type: String, required: !0 },
                body: { type: String, required: !0 },
                email: { type: String, required: !0 },
            },
            { timestamps: !0 }
        ),
        u = a.model('testApp', d),
        l = s.Router()
    l.use(async (e, s, t) => {
        if (!e.headers.authorization)
            return s.status(401).json({ message: 'Auther failed' })
        const o = e.headers.authorization.split(' ')[1]
        try {
            const { _id: s } = r.verify(o, process.env.SECRET_KEY)
            ;(e.user = await c.findOne({ _id: s }).select('_id')), t()
        } catch (e) {
            return s
                .status(401)
                .json({
                    errorName: e.name,
                    errorMessage:
                        'Authentication failed. Try Logging in Again.',
                })
        }
    }),
        l.post('/getAll', async (e, s) => {
            const { email: t } = e.body,
                r = await u.find({ email: t }).sort({ createdAt: -1 })
            s.status(200).json(r)
        }),
        l.get('/:id', async (e, s) => {
            const { id: t } = e.params
            if (!a.Types.ObjectId.isValid(t))
                return s
                    .status(404)
                    .json({
                        error: 'There is no such blog in the db.',
                        status: 404,
                    })
            const r = await u.findById(t)
            if (!r)
                return s
                    .status(404)
                    .json({ error: 'No such workout exists.', status: 404 })
            s.status(200).json(r)
        }),
        l.post('/', async (e, s, t) => {
            const r = e.body
            try {
                const e = await u.create({ ...r })
                s.status(200).json({ test: e, status: 'ok' })
            } catch (e) {
                s.status(404).json({ error: e.message })
            }
        }),
        l.delete('/:id', async (e, s) => {
            const { id: t } = e.params
            return a.Types.ObjectId.isValid(t)
                ? (await u.findOneAndDelete({ _id: t }))
                    ? s
                          .status(200)
                          .json({ message: 'The object/test was deleted.' })
                    : s
                          .status(404)
                          .json({ error: 'No object found to delete.' })
                : s.status(404).json({ error: 'No document to delete.' })
        }),
        l.patch('/:id', async (e, s) => {
            const { id: t } = e.params
            return a.Types.ObjectId.isValid(t)
                ? (await u.findOneAndUpdate({ _id: t }, { ...e.body }))
                    ? void s
                          .status(200)
                          .json({ message: 'The object/test was updated.' })
                    : s
                          .status(404)
                          .json({ error: 'No object found to update.' })
                : s.status(404).json({ error: 'No document to delete.' })
        })
    const p = l
    e.config()
    const m = (e) =>
            r.sign({ id: e }, process.env.SECRET_KEY, { expiresIn: '1d' }),
        g = s.Router()
    g.post('/login', async (e, s) => {
        const { email: t, password: r } = e.body
        try {
            const e = await c.login(t, r),
                o = m(e)
            s.status(200).json({ email: t, token: o })
        } catch (e) {
            s.status(404).json({ error: e.message })
        }
    }),
        g.post('/signup', async (e, s) => {
            const { email: t, password: r } = e.body
            try {
                const e = await c.signup(t, r),
                    o = m(e)
                s.status(200).json({ email: t, token: o })
            } catch (e) {
                s.status(404).json({ error: e.message })
            }
        })
    const w = g,
        y = require('cors'),
        h = require('multer')
    require('express-rate-limit'), require('express-slow-down'), e.config()
    const f = s(),
        j = h()
    f.use(j.array()),
        f.use(s.json()),
        f.use(t('dev')),
        f.use(y()),
        f.use('/api', w),
        f.use('/api', p),
        a
            .connect(process.env.MONG_URI)
            .then((e) => {
                f.listen(process.env.PORT, () => {
                    console.log('Listening on Port', process.env.PORT)
                })
            })
            .catch((e) => {
                console.log(e)
            })
})()
